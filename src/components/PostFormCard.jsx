import { useContext } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import { UserContext } from "../context/UserContext";

export default function PostFormCard() {
  const { Profile } = useContext(UserContext);
  return (
    <Card>
      {/* Post form haeder section  */}
      <div className="flex items-center gap-1">
        <Avatar img={Profile?.avatar?.public_url} />
        <textarea
          className="grow font-semibold outline-slate-200 overflow-hidden focus:border-slate-400  p-3 h-14 "
          placeholder=" What's in your mind ${UserName}"
        />
      </div>

      {/* Post form section bottom  */}
      <div className="flex  items-center mt-4">
        <div>
          <input
            type="file"
            onInputCapture={(ev) => console.log(ev.target.files)}
            id="photo"
            className=" hidden "
          />{" "}
          <label
            htmlFor="photo"
            className="text-sm items-center flex gap-1 hover:text-white hover:bg-sky-400  font-semibold border border-slate-400 border-2 cursor-pointer  border-sky-400 mr-2 px-2 rounded-full py-1"
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
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            Photo
          </label>
        </div>
        <div>
          <button className="text-sm items-center flex gap-1 border border-slate-400 border-2 hover:text-white hover:bg-sky-400  font-semibold border-sky-400 mr-2 px-2 rounded-full py-1">
            {" "}
            <span>
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            Place
          </button>
        </div>
        <div>
          <button className="text-sm items-center flex gap-1 border border-slate-400 border-2 hover:text-white hover:bg-sky-400  font-semibold border-sky-400 mr-2 px-2 rounded-full py-1">
            {" "}
            <span>
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
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </span>
            Mood
          </button>
        </div>
        <div className="grow text-right ">
          <button className="bg-sky-400 text-white px-6 py-1 rounded-md hover:shadow-lg ">
            <span className="font-semibold">Share</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
