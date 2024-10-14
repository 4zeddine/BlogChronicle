import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthFormPage from "./pages/userAuthForm.page.jsx";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="signin" element={<UserAuthFormPage type="sign-in"/>}/>
                <Route path="signup" element={<UserAuthFormPage type="sign-up"/>}/>
            </Route>
        </Routes>
    );
}

export default App;
