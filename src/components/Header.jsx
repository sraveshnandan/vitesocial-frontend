import { Link } from "react-router-dom";
import Card from "./Card";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import Avatar from "./Avatar.jsx";
export const Header = () => {
  const { Profile } = useContext(UserContext);
  let params = true;
  if (Profile) {
    params = false;
  }

  return (
    <>
      <div className="w-full   mx-auto z-[999] shadow-lg">
        <Card noPadding={params}>
          <div className=" w-full md:px-10  flex items-center justify-between  ">
            {/*Logo */}
            <div className="logo">
              <Link to="/">
                <span className="text-xl flex gap-2 font-semibold text-slate-600 hover:text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  ViteSocial
                </span>
              </Link>
            </div>
            {/*search bar*/}
            <div className="hidden">
              <input
                className="px-5 py-2 font-semibold md:block hidden  bg-[#f7f7f7] rounded-full "
                type="search"
              />
            </div>

            {Profile ? (
              <Link
                to="/profile"
                className=" duration-500 flex items-center gap-2 h-8"
              >
                <span className="flex items-center gap-2 font-semibold cursor-pointer">
                  {Profile?.username}
                  <Avatar img={Profile?.avatar?.public_url} size={"sm"} />
                </span>{" "}
              </Link>
            ) : (
              <div className="links">
                <Link
                  to="/login"
                  className=" duration-500 bg-sky-400 px-5 py-2 mx-2 hover:shadow-lg hover:shadow-slate-400 rounded-full  font-semibold text-white "
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className=" duration-500 bg-sky-400 px-5 py-2 mx-2 hover:shadow-lg hover:shadow-slate-400 rounded-full  font-semibold text-white "
                >
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};
