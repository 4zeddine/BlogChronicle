import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import 'dotenv/config';

import User from "./Schema/User.js";

const app = express();
let PORT = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

app.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
});

const formatDataDilevery = (user) => {

    const accessToken = jwt.sign({id: user._id},process.env.SECRET_ACCESS_KEY);
    return {
        accessToken,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
        fullname: user.personal_info.name
    }
}

const usernameGenerator = async (email) => {
    let username = email.split("@")[0];
    let usernameExists = await User.exists({"personal_info.username": username});
    if (usernameExists) {
        username += nanoid().substring(0, 5);
    }
    return username;
};

app.post("/signup", async (req, res) => {
    let { name, email, password } = req.body;

    if (!name || name.length < 3) {
        return res.status(403).json({ "error": "Full name must exceed three letters" });
    }
    if (!email || !emailRegex.test(email)) {
        return res.status(403).json({ "error": "Invalid email" });
    }
    if (!password || !passwordRegex.test(password)) {
        return res.status(403).json({
            "error": "Invalid password. It should contain 6 to 20 characters with a numeric, 1 Uppercase, and 1 Lowercase"
        });
    }

    try {
        let existingUser = await User.findOne({ "personal_info.email": email });

        if (existingUser) {
            return res.status(400).json({ "error": "Email already exists" });
        }

        bcrypt.hash(password, 10, async (err, hashed_password) => {
            if (err) {
                return res.status(500).json({ "error": "Error hashing password" });
            }

            let username = await usernameGenerator(email);
            let user = new User({
                personal_info: {
                    name,
                    email,
                    password: hashed_password,
                    username
                }
            });
            console.log("New User Object:", user);

            user.save().then((newUser) => {
                return res.status(200).json(formatDataDilevery(newUser));
            }).catch(err => {
                return res.status(500).json({ "error": err.message });
            });
        });
    } catch (err) {
        return res.status(500).json({ "error": "Server error" });
    }
});

app.post("/signin", async (req, res) => {
    let { email, password } = req.body;
    User.findOne({ "personal_info.email": email }).then((user) => {
        if(!user) return res.status(403).json({"error": "Email not found"});

        bcrypt.compare(password, user.personal_info.password, (err, result) => {
            if(err){
                return res.status(403).json({"error": "Error occurred while login please try again"});
            }
            if(!result){
                return res.status(403).json({"error": "Incorrect password"});
            }else{
                return res.status(200).json(formatDataDilevery(user))
            }
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({"error": err.message});
    })
});

app.listen(PORT, () => {
    console.log('listening on PORT => ' + PORT);
});
