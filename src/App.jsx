import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
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
import {useContext, useEffect} from "react";
import {UserContext} from "./context/UserContext.jsx";


function App() {

    const navigate = useNavigate();
    //axios configuration
    axios.defaults.baseURL = "http://127.0.0.1:8000";
    axios.defaults.withCredentials = true;
    //Context configurations
    const {setUsers, setProfile, setPosts, setMyposts} = useContext(UserContext);


    //fetch user's account details
    const fetchUserProfile = async () => {
        try {
            const {data} = await axios.get("/user/profile");
            console.log(data)
            if (data.success === true){
                setProfile(data.details);
                console.log("Profile fetched successfully.")
            }

        } catch (error) {
            console.log(error)

        }

    }

    //fetching all users

    const getAllUsers = () => {
        axios.get("/all/users").then(data => {
            const root = data.data.details;

                setUsers(root)


        })
    }
//fetching all posts


    const fetchAllPosts = () => {
        axios.get("/posts/all").then(root => {


                setPosts(root.data.data);
                console.log("All posts fetched successfully.")

        })
    }


    //fetching all users own posts

    const fetchUserPost = () => {
        axios.get("/user/mypost").then(data => {



                setMyposts(data.data.posts);
                console.log("All users own post fetched successfully.")

        })
    }
    //Main useEffect function
    useEffect(() => {
        fetchUserProfile();
        getAllUsers();
        fetchAllPosts();
        fetchUserPost();
    }, []);


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
