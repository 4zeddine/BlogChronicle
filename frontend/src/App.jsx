import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthFormPage from "./pages/userAuthForm.page.jsx";
import {createContext, useEffect, useState} from "react";
import {lookInSession} from "./common/session.jsx";

export const UserContext = createContext({});

const App = () => {
    const [userAuth, setUserAuth] = useState({});
    useEffect(() => {
        let userInSession = lookInSession("user");
        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({accessToken: null})
    }, []);
    return (
        <UserContext.Provider value={{userAuth, setUserAuth}}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="signin" element={<UserAuthFormPage type="sign-in"/>}/>
                    <Route path="signup" element={<UserAuthFormPage type="sign-up"/>}/>
                </Route>
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
