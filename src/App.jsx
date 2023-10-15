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
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;
        //Context configurations
    const {  setUsers ,setProfile, Profile, setPosts, setMyposts} = useContext(UserContext);


    //fetch user's account details
    const fetchUserProfile = ()=>{
        axios.get("/user/profile").then(data => {
            if (data.data.success === false){
                //when user's profile in not fetched
                navigate("/login")
            }
            const profileData = data.data.details;
            setProfile(profileData);
            console.log("Logged-in users profile details fetched successfully.")
        }).
        catch(err => alert(err))
    }

    //fetching all users

    const getAllUsers = ()=>{
        axios.get("/all/users").then(data => {
            const root = data.data.details;
            setUsers(root);
            console.log("All users fetched successfully.")
        })
    }
//fetching all posts


    const fetchAllPosts =()=>{
        axios.get("/posts/all").then(root=>{
            setPosts(root.data.data);
            console.log("All posts fetched successfully.")
        })
    }


    //fetching all users own posts

    const fetchUserPost = ()=>{
        axios.get("/user/mypost").then(data=>{
            setMyposts(data.data.posts);
            console.log("All users own post fetched successfully.")
        })
    }
    //Main useEffect function
    useEffect(()=>{
        fetchUserProfile();
        getAllUsers();
        fetchAllPosts();
        fetchUserPost();
    },[]);

       
   


  
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
