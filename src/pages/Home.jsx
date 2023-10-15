import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layouts/Layout";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext.jsx";
import LoginPage from "./Login.jsx";
import axios from "axios";


export const HomePage = () => {
    const {Profile, posts} = useContext(UserContext);
    //this is for testing purpose
    if (Profile !== undefined ) {
        return (
            <>
                <Layout>
                    <PostFormCard/>
                    {
                        posts && posts.map((post, index)=>(
                           <PostCard post={post} key={index}/>
                       ))
                    }
                </Layout>
            </>
        )
    } else {
        return (
            <LoginPage/>
        )

    }


}