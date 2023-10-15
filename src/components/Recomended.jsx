import Card from "./Card"
import Avatar from "./Avatar.jsx";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import axios from "axios";

export const Recomended = () => {
    const {users, Profile} = useContext(UserContext);
    const [followedBtnText, setFollowedBtnText] = useState("Follow");
//removing logged-in user's details from user array
    const  filteredUser = users?.filter(user=>{
        return user?._id != Profile?._id;
    })
    //Follow user Function
    const handleFollowUserFunction = (userId) => {
        axios.get(`/user?id=${userId}`).then(data => {
            //Showing the alert
            alert(data.data.message);


    }
)

}
return (
    <Card>
        <h1 className=" font-bold md:text-md  my-3 text-center text-slate-400">
            Recommended Users
        </h1>
        {/*Outer box */}
        <div className="flex flex-col px-4  w-full ">
            {/*inner user card */}
            {/*  Looping through the all users array */}
            {
                filteredUser?.map((u,index) => (
                    <div id={index}
                        className="flex border-1 border-slate-400 rounded-lg shadow-lg py-8 px-3  items-center my-2 gap-3 h-8 ">
                        <Avatar size={'sm'} img={u.avatar?.public_url}/><span className="font-semibold  text-sm">{u?.fullName}</span>
                        <button
                            className=" px-2 py-0.5 rounded-md hover:text-black hover:bg-white hover:border hover:border-3 hover:shadow-lg  hover:shadow-slate-400 font-semibold text-white bg-sky-400 "
                            onClick={() =>
                                handleFollowUserFunction(u._id)
                            }>{Profile?.following?.forEach(user=>{
                                user._id === u._id
                        }) ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                ))
            }

        </div>
    </Card>
)
}