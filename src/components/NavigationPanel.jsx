import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
export default function NavigationPanel() {

  const [path, setpath] = useState(window.location.pathname);

  const activeClass = 'md:text-md text-sm flex md:gap-2 py-3 font-semibold bg-sky-400 shadow-lg md:-mx-6 md:px-8 md:px-8 px-5 text-white rounded-md ';


  const inActiveClass = ' text-sm md:text-md flex md:gap-2 py-3 font-semibold  hover:bg-sky-100 hover:shadow-lg md:hover:-mx-3 md:hover:px-8  px-5 md:hover:py-3 hover:text-black hover:rounded-md';


  return (
    <Card>
      <div className="flex md:block md:block justify-between">
        <h2 className=" md:block hidden text-slate-400 text-sm font-semibold mb-2">Navigation</h2>
        <Link to="/" className={path === '/' ? activeClass : inActiveClass}> 🏠 <span className="hidden md:block">Home</span></Link>
        <Link to="/profile" className={path === '/profile' || path === '/profile/posts' || path === '/profile/about' || path === '/profile/friends' || path === '/profile/photos' ? activeClass : inActiveClass}> 👩 <span className="hidden md:block">Account</span></Link>
        <Link to="/savedPost" className={path === '/savedPost' ? activeClass : inActiveClass}>  😋 <span className="hidden md:block">Saved Post</span> </Link>
        <Link to="/notification" className={path === '/notification' ? activeClass : inActiveClass}> 🔔 <span className="hidden md:block">Notification</span></Link>
        <Link to="/login" className={path === '/logout' ? activeClass : inActiveClass}> 🔐 <span className="hidden md:block">Log Out</span></Link>

      </div>

    </Card>

  );
}