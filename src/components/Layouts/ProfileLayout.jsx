import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Card from "../Card";

import Layout from "./Layout";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";

// eslint-disable-next-line react/prop-types
export const ProfileLayout = ({ children }) => {
  const { Profile } = useContext(UserContext);
  const [path] = useState(window.location.pathname);

  // css classes
  const activeClass =
    " items-center flex gap-1 px-3 bg-sky-400  text-white rounded-full  font-semibold";
  const inActiveClass =
    " items-center flex gap-1 px-3   py-1 hover:border-sky-400 hover:rounded-full hover:border-2";

  return (
    <Layout>
      <Card>
        {/* Outer section  */}
        <div className="relative">
          {/* inner section  */}
          <div className=" cover rounded-md overflow-hidden">
            {/* Cover img  */}
            <div className="bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 w-full rounded-md h-[180px]"></div>
            {/* Profile img  */}
            <div className="absolute top-[8.55rem] left-4    ">
              <Avatar size={"md"} img={Profile?.avatar?.public_url} />
            </div>
            {/* User Details  */}
            <div className="   pl-[8rem] pb-1  ">
              <span className="font-semibold text-xl">{Profile?.fullName}</span>
              <br />
              <span className="text-slate-500 leading-4 text-sm">
                Bihar, India
              </span>
            </div>
            {/* Profile control  */}

            <div className="flex pb-0 gap-2 pt-3 mt-2">
              <Link
                to="/profile/posts"
                className={
                  path === "/profile/posts" ? activeClass : inActiveClass
                }
              >
                {" "}
                <span>📄</span>Posts
              </Link>
              <Link
                to="/profile/about"
                className={
                  path === "/profile/about" ? activeClass : inActiveClass
                }
              >
                {" "}
                <span>🤴</span>About
              </Link>
              <Link
                to="/profile/friends"
                className={
                  path === "/profile/friends" ? activeClass : inActiveClass
                }
              >
                {" "}
                <span>😎</span>Friends
              </Link>
              <Link
                to="/profile/photos"
                className={
                  path === "/profile/photos" ? activeClass : inActiveClass
                }
              >
                {" "}
                <span>📷</span>Photo
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* CONTENT  */}
      <div className="mt-4">{children}</div>
    </Layout>
  );
};
