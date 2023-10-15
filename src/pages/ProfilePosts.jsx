import { ProfileLayout } from "../components/Layouts/ProfileLayout";
import PostCard from "../components/PostCard";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

export default function ProfilePosts (){
    const {myposts }= useContext(UserContext);
  return(
    <ProfileLayout>
        {
            myposts && myposts.map((post, index)=>(
                <PostCard post={post} mypost={true} key={index}/>
            ))

        }
    </ProfileLayout>
  )
}