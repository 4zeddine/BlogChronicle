import InputComponent from "../components/input.component.jsx";
import {Link, Navigate} from "react-router-dom";
import googleIcon from "../imgs/google.png";
import PageAnimation from "../common/page-animation.jsx";
import {toast, Toaster} from 'react-hot-toast';
import axios from "axios";
import {storeInSession} from "../common/session.jsx";
import {useContext} from "react";
import {UserContext} from "../App.jsx";


const UserAuthFormPage = ({ type }) => {

    const { userAuth, setUserAuth } = useContext(UserContext);
    const { accessToken } = userAuth || {}; // Ensure userAuth is defined before destructuring accessToken
    console.log("Access token:", accessToken);

    const userAuthServerHandle = (serverRoute, formData) =>{
        console.log("Sending data to server:", formData);
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
            .then(({data}) => {
                storeInSession("user", JSON.stringify(data));
                setUserAuth(data);
            }).catch(({ response }) => {
                toast.error(response.data.error);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let serverRoute = type === "sign-in" ? "/signin" : "/signup";

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

        let form = new FormData(formElement);
        let formData = {};

        for(let [key, value] of form.entries()){
            formData[key] = value;
        }

        let {name, email, password} = formData;

        if (name) {
            if (name.length < 3) {
                return toast.error("error: Full name must exceed three letters");
            }
        }
        if (!emailRegex.test(email)) {
            return toast.error("error: Invalid email");
        }
        if (!passwordRegex.test(password)) {
            return toast.error("error: Invalid password. It should contain 6 to 20 characters with a numeric, 1 Uppercase, and 1 Lowercase");
        }
        userAuthServerHandle(serverRoute, formData);
    }

    return(
        accessToken ? <Navigate to ="/"/>
            :
        <PageAnimation keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <Toaster />
                <form id="formElement" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-noto capitalize text-center mb-24">
                        {type === "sign-in" ? "Welcome Back to the blog" : "Create an Account to get started"}
                    </h1>
                    {type !== "sign-in" ? <InputComponent name="name" type="text" placeholder="Enter Your Full Name" icon="fi-rr-user"/> : ""}
                    <InputComponent name="email" type="email" placeholder="Enter Your Email " icon="fi-br-envelope"/>
                    <InputComponent name="password" type="password" placeholder="Enter Your Password" icon="fi-sr-lock"/>
                    <button className="btn-dark center mt-14" type="submit" onClick={handleSubmit}>
                        {type.replace("-", " ")}
                    </button>
                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black"/>
                        <p>Or</p>
                        <hr className="w-1/2 border-black"/>
                    </div>
                    <button className="btn-dark flex items-center justify-center gap-4 w-[80%] center">
                        <img src={googleIcon} className="w-5" alt="Google logo"/>
                        Use Google
                    </button>
                    {
                        type === "sign-in" ? <p className="mt-6 text-dark-grey text-xl text-center"> Don't have an account yet? <Link to="/signup" className="underline text-black text-xl ml-1">Join Us</Link></p> : <p className="mt-6 text-dark-grey text-xl text-center"> Already a member? <Link to="/signin" className="underline text-black text-xl ml-1">Sign in here</Link></p>
                    }
                </form>
            </section>
        </PageAnimation>
    )
}

export default UserAuthFormPage;
