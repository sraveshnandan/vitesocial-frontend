import { Link } from "react-router-dom";
import Card from "./Card";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";

export default function NavigationPanel() {
  const { Profile, setProfile } = useContext(UserContext);

  const [path] = useState(window.location.pathname);

  const handleLogoutFunction = async () => {
    const res = await axios.get("/user/logout");
    setProfile(undefined);
    console.log(res.data.message);
  };

  const activeClass =
    "md:text-md text-sm flex md:gap-2 py-3 font-semibold bg-sky-400 shadow-lg md:-mx-6 md:px-8 md:px-8 px-5 text-white rounded-md ";

  const inActiveClass =
    " text-sm md:text-md flex md:gap-2 py-3 font-semibold  hover:bg-sky-100 hover:shadow-lg md:hover:-mx-3 md:hover:px-8  px-5 md:hover:py-3 hover:text-black hover:rounded-md";

  return (
    <Card>
      <div className="flex md:full  md:block justify-between">
        <h2 className=" md:block hidden text-slate-400 text-sm font-semibold mb-2">
          Navigation
        </h2>
        <Link to="/" className={path === "/" ? activeClass : inActiveClass}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="hidden md:block">Home</span>
        </Link>
        <Link
          to="/profile"
          className={
            path === "/profile" ||
            path === "/profile/posts" ||
            path === "/profile/about" ||
            path === "/profile/friends" ||
            path === "/profile/photos"
              ? activeClass
              : inActiveClass
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span className="hidden md:block">Account</span>
        </Link>
        <Link
          to="/savedPost"
          className={path === "/savedPost" ? activeClass : inActiveClass}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <span className="hidden md:block">Saved Post</span>{" "}
        </Link>
        <Link
          to="/notification"
          className={path === "/notification" ? activeClass : inActiveClass}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
          <span className="hidden md:block">Notification</span>
        </Link>
        <Link
          onClick={handleLogoutFunction}
          to="/login"
          className={path === "/logout" ? activeClass : inActiveClass}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span className="hidden md:block">Log Out</span>
        </Link>
      </div>
    </Card>
  );
}
