import InputComponent from "../components/input.component.jsx";

const UserAuthFormPage = ({ type }) => {
    return(
        <section className="h-cover flex items-center justify-center">
            <form action="" className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-noto capitalize text-center mb-24">
                    {type === "sign-in" ? "Welcome Back to the blog" : "Create an Account to get started"}
                </h1>
                {type !== "sign-in" ? <InputComponent name="full-name" type="text" placeholder="Enter Your Full Name"/> : ""}
            </form>
        </section>
    )
}

export default UserAuthFormPage;
