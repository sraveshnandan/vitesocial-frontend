import { useContext, useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import axios from "axios";

export default function PostCard({ post, key, mypost }) {
  const [dropDown, setdropDown] = useState(false);
  const [comment, setComment] = useState("");
  const [commentDropdown, setCommentDropdown] = useState(false);
  const { Profile } = useContext(UserContext);
  //action performing function
  //Handle like function
  const handleLikeFunction = async () => {};

  // handle show comment function

  const showCommentFunction = async () => {};

  //handle comment fuction

  const handleCommentFunction = async (ev) => {
    ev.preventDefault();
    console.log(comment);

    const { data } = await axios.post(`/post/${post._id}`, { comment });
    alert(data.message);
    console.log(data);
  };

  //show share function

  const showshareFunction = async () => {};

  return (
    // Outer Card components
    <Card>
      {/* Post header  */}
      <div className="flex gap-2">
        <div>
          <Avatar img={post?.owner?.avatar?.public_url} />
        </div>
        <div>
          <p>
            <Link to="/" className="font-semibold hover:underline ">
              {post?.owner?.username}
            </Link>{" "}
            shared <span className="text-sky-400">a photo.</span>
          </p>
          <p className="text-slate-400 text-sm ">2 hours ago</p>
        </div>
        <div className="grow text-right relative">
          <button className="" onClick={() => setdropDown(!dropDown)}>
            {!dropDown ? (
              <span className="font-bold mr-4 ">…</span>
            ) : (
              <span className="font-bold mr-4 text-lg ">×</span>
            )}
          </button>
          <div>
            {dropDown && (
              <div className="absolute right-0 p-0 ">
                <Card>
                  <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm">
                    <span className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
</svg>
</span>Save{" "}
                  </Link>

                  <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm">
                    <span className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>Share{" "}
                  </Link>

                  {post?.owner?._id.toString() === Profile?._id ? (
                    <>
                      <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm">
                        <span className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</span> Edit{" "}
                      </Link>

                      <Link className="   px-[20px] my-3 hover:bg-red-400 hover:shadow-lg hover:py-2 hover:text-white hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm">
                        <span className="text-sm">
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
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                        Delete{" "}
                      </Link>
                    </>
                  ) : null}

                  <Link className="   px-[20px] my-3 hover:bg-red-400 hover:shadow-lg hover:py-2 hover:text-white hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm">
                    <span className="text-sm">👿</span>Report{" "}
                  </Link>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Post title */}
      <div className="title mt-1 text-thin ">
        <p>{post?.description}</p>
      </div>
      {/* Post img  */}

      <div className="rounded-md overflow-hidden mt-2">
        <div className="w-full h-[320px] bg-sky-100 ">
          <img src={post?.image?.public_url} alt="" />
        </div>
      </div>
      {/* Post action  */}

      <div className="flex mt-2 gap-8">
        <button onClick={handleLikeFunction}>
          <span className="flex items-center gap-1">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className=""> 12</span>
          </span>
        </button>
        <button onClick={showCommentFunction}>
          <span className="flex items-center gap-1">
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            7
          </span>
        </button>
        <button onClick={showshareFunction}>
          <span className="flex items-center gap-1">
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
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            9
          </span>
        </button>
      </div>

      {/* post comments  */}
      <div className="flex gap-3 mt-3">
        <Avatar img={Profile?.avatar?.public_url} />
        <div className="grow h-12 border border-slate-400 rounded-full overflow-hidden flex items-center justify-center ">
          <input
            type="text"
            onChange={(ev) => setComment(ev.target.value)}
            className=" h-full outline-none px-5 font-semibold  grow border-none"
            placeholder="What do you think about it ?"
          />
          <button
            onClick={handleCommentFunction}
            type="submit"
            className="p-3 hover:bg-sky-400"
          >
            <span className="text-2xl ">
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
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
