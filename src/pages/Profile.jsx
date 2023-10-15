import {Link} from "react-router-dom";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Layout from "../components/Layouts/Layout";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";


export const ProfilePage = () => {
    const {Profile} = useContext(UserContext);

    const [path] = useState(window.location.hash);
    console.log(Profile);

    const url2 = window.location.href;

// css classes 
    const activeClass = ' items-center flex gap-1 px-3 bg-sky-400  text-white rounded-full  font-semibold';
    const inActiveClass = ' items-center flex gap-1 px-3   py-1 hover:border-sky-400 hover:rounded-full hover:border-2'

    return (<Layout>
            <Card>
                {/* Outer section  */}
                <div className="relative ">
                    {/* inner section  */}
                    < div className=" cover rounded-md overflow-hidden">
                        {/* Cover img  */}
                        <div
                            className="bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 w-full rounded-md h-[180px]"></div>
                        {/* Profile img  */}
                        <div className="absolute  top-[8.55rem] left-4    ">
                            <Avatar size={'md'} img={Profile?.avatar?.public_url}/>
                        </div>
                        {/* User Details  */}
                        <div className="   pl-[8rem] pb-1  ">
                            <span className="font-semibold text-xl">{Profile?.fullName}</span>
                            <br/>
                            <span className="text-slate-500 leading-4 text-sm">State, Country</span>
                        </div>
                        {/* Profile controll  */}

                        <div className="flex pb-0 gap-2 pt-3 mt-2">
                            <Link to="/profile/posts" className={path === '#posts' ? activeClass : inActiveClass}>
                                <span>📄</span>Posts</Link>
                            <Link to="/profile/about" className={path === '#about' ? activeClass : inActiveClass}>
                                <span>🤴</span>About</Link>
                            <Link to="/profile/friends"
                                  className={path === '#friends' ? activeClass : inActiveClass}> <span><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
</svg>
</span>Followers</Link>
                            <Link to="/profile/photos" className={path === '#photos' ? activeClass : inActiveClass}>
                                <span>📷</span>Following</Link>
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


        </Layout>)
}