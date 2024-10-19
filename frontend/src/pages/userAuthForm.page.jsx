import InputComponent from "../components/input.component.jsx";
import {Link} from "react-router-dom";
import googleIcon from "../imgs/google.png";
import PageAnimation from "../common/page-animation.jsx";

const UserAuthFormPage = ({ type }) => {
    return(
        <PageAnimation>
            <section className="h-cover flex items-center justify-center">
                <form action="" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-noto capitalize text-center mb-24">
                        {type === "sign-in" ? "Welcome Back to the blog" : "Create an Account to get started"}
                    </h1>
                    {type !== "sign-in" ? <InputComponent name="full-name" type="text" placeholder="Enter Your Full Name" icon="fi-rr-user"/> : ""}
                    <InputComponent name="email" type="email" placeholder="Enter Your Email " icon="fi-br-envelope"/>
                    <InputComponent name="password" type="password" placeholder="Enter Your Password" icon="fi-sr-lock"/>
                    <button className="btn-dark center mt-14" type="submit">
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
                        type === "sign-in" ? <p className="mt-6 text-dark-grey text-xl text-center"> Don't have an account yet? <Link to="/signup" className="underline text-black text-xl ml-1">Join Us</Link></p> : <p className="mt-6 text-dark-grey text-xl text-center"> Already a member? <Link to="/signup" className="underline text-black text-xl ml-1">Sign in here</Link></p>
                    }
                </form>
            </section>
        </PageAnimation>
    )
}

export default UserAuthFormPage;
