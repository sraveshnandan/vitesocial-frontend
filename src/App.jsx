import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {HomePage} from "./pages/Home";
import LoginPage from "./pages/Login";
import {ProfilePage} from "./pages/Profile";
import ProfilePosts from "./pages/ProfilePosts";
import ProfileAbout from "./pages/ProfileAbout";
import ProfileFriends from "./pages/ProfileFriends";
import ProfilePhotos from "./pages/ProfilePhotos";
import SavedPost from "./pages/SavedPost";
import Notification from "./pages/Notification";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


function App() {
    axios.defaults.baseURL = "http://localhost:4000/api/v1";
    axios.defaults.withCredentials = true;
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
                <Route path="/resetpassword" element={<ResetPassword/>}/>
                <Route path="/savedPost" element={<SavedPost/>}/>
                <Route path="/notification" element={<Notification/>}/>
                <Route path="/profile/posts" element={<ProfilePosts/>}/>
                <Route path="/profile/about" element={<ProfileAbout/>}/>
                <Route path="/profile/friends" element={<ProfileFriends/>}/>
                <Route path="/profile/photos" element={<ProfilePhotos/>}/>
            </Routes>
        </>
    )
}

export default App;
