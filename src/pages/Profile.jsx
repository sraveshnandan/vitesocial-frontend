import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import PostCard from "../components/PostCard";
import Layout from "../components/Layouts/Layout";
import { useEffect, useState } from "react";
import AboutCard from "../components/AboutCard";


export const ProfilePage = () => {
  const [path, setpath] = useState(window.location.hash);
console.log(path);

let url = window.location.hash;
const url2 = window.location.href;
console.log(url2)
// css classes 
  const activeClass = ' items-center flex gap-1 px-3 bg-sky-400  text-white rounded-full  font-semibold';
  const inActiveClass = ' items-center flex gap-1 px-3   py-1 hover:border-sky-400 hover:rounded-full hover:border-2'

  return (
    <Layout>
      <Card >
        {/* Outer section  */}
        <div className="relative">
          {/* inner section  */}
          < div className=" cover rounded-md overflow-hidden">
            {/* Cover img  */}
            <div className="bg-violet-500 w-full rounded-md h-[180px]"></div>
            {/* Profile img  */}
            <div className="absolute top-[8.55rem] left-4    ">
              <Avatar size={'md'} />
            </div>
            {/* User Details  */}
            <div className="   pl-[8rem] pb-1  ">
              <span className="font-semibold text-xl" >User Name</span>
              <br />
              <span className="text-slate-500 leading-4 text-sm">State, Country</span>
            </div>
            {/* Profile controll  */}

            <div className="flex pb-0 gap-2 pt-3 mt-2">
              <Link to="/profile/posts" className={path === '#posts' ? activeClass : inActiveClass}> <span>📄</span>Posts</Link>
              <Link to="/profile/about" className={path === '#about' ? activeClass : inActiveClass}> <span>🤴</span>About</Link>
              <Link to="/profile/friends" className={path === '#friends' ? activeClass : inActiveClass}> <span>😎</span>Friends</Link>
              <Link to="/profile/photos" className={path === '#photos' ? activeClass : inActiveClass}> <span>📷</span>Photo</Link>
            </div>


          </div>
        </div>
      </Card>

      {/* CONTENT  */}
      <div className="mt-4">
        {/* {url === '#posts' ? (
          <PostCard />
        ) : (null)}

        {url === '#about' ? (
         <AboutCard/>
        ) : (null)}
        {url === '#friends' ? (
          <Card>
            hi friends
          </Card>
        ) : (null)}

{url === '#photos' ? (
          <Card>
            hi photos
          </Card>
        ) : (null)} */}

      </div>




    </Layout>
  )
}