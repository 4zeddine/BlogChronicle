// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV4lxb3_LjzQjl2LyP1DrZpoMOdDhgqfo",
    authDomain: "blog-chronicle.firebaseapp.com",
    projectId: "blog-chronicle",
    storageBucket: "blog-chronicle.appspot.com",
    messagingSenderId: "490210647078",
    appId: "1:490210647078:web:a38e5b456d99af1adb5ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        })
        .catch((err) => {
            console.log(err);
        })
    return user;
}
