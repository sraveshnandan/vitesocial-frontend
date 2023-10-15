
import FriendsCard from "../components/FriendCard";
import { ProfileLayout } from "../components/Layouts/ProfileLayout";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import Card from "../components/Card";


export default function ProfileFriends (){
    const {Profile} = useContext(UserContext);
    console.log(Profile.followers);
  return(
    <ProfileLayout>
      <div className="w-full grid md:grid-col-2">
        <span className="text-slate-400 font-semibold mb-2">Followers</span>
      {
            Profile && Profile.followers?.map(friend =>(
                <FriendsCard friend={friend}/>
                )
            )
        }
      </div>

    </ProfileLayout>
  )
}