import AboutCard from "../components/AboutCard";
import { ProfileLayout } from "../components/Layouts/ProfileLayout";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";


export default function ProfileAbout (){
    const {Profile} = useContext(UserContext);
  return(
    <ProfileLayout>
      <AboutCard  profile={Profile}/>
    </ProfileLayout>
  )
}