import { useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import { Link } from "react-router-dom";
export default function PostCard() {
  const [dropDown, setdropDown] = useState(false);
  return (
    // Outer Card components 
    <Card>
      {/* Post header  */}
      <div className="flex gap-2">
        <div>
          <Avatar />
        </div>
        <div>
          <p> <Link to="/" className="font-semibold hover:underline ">User Name</Link> shared <span className="text-sky-400">a photo.</span></p>
          <p className="text-slate-400 text-sm ">2 hours ago</p>
        </div>
        <div className="grow text-right relative">
          <button
           className=""
           onClick={()=>setdropDown(!dropDown)}
           >
            {
              !dropDown ? ( <span className="font-bold mr-4 ">…</span>) : (<span className="font-bold mr-4 ">❌</span>)
            }
          </button>
          <div>
            {
              dropDown && (
                <div className="absolute right-0 p-0 ">
                 <Card>
                  <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm"> <span className="text-sm">🏷</span>Save  </Link>

                  <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm"> <span className="text-sm">🚀</span>Share  </Link>

                  <Link className="   px-[20px] my-3 hover:bg-sky-100 hover:shadow-lg hover:py-2 hover:text-black hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm"> <span className="text-sm">✒</span>  Edit  </Link>

                  <Link className="   px-[20px] my-3 hover:bg-red-400 hover:shadow-lg hover:py-2 hover:text-white hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm"> <span className="text-sm">❌</span>Delete </Link>

                  <Link className="   px-[20px] my-3 hover:bg-red-400 hover:shadow-lg hover:py-2 hover:text-white hover:shadow-sm hover:shadow-grey-300 hover:rounded-md flex gap-2 font-semibold block text-sm"> <span className="text-sm">👿</span>Report </Link>
                 </Card>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* Post title */}
      <div className="title mt-1 text-thin ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam, veniam temporibus esse sit ipsa. Non expedita fugiat dicta omnis, officia hic voluptas explicabo accusantium quidem. </p>
      </div>
      {/* Post img  */}

      <div className="rounded-md overflow-hidden mt-2">
        <div className="w-full h-[320px] bg-sky-300 "></div>

      </div>
      {/* Post action  */}

      <div className="flex mt-2 gap-8">
        <button><span>❤</span> 12</button>
        <button><span>💬</span> 7</button>
        <button><span>🚀</span> 9</button>
      </div>

      {/* post comments  */}
      <div className="flex gap-3 mt-3">
        <Avatar />
        <div className="grow h-12 border border-slate-400 rounded-full overflow-hidden flex items-center justify-center ">
          <input type="text" className=" h-full outline-none px-5 font-semibold  grow border-none" placeholder="What do you think about it ?" />
          <button type="submit" className="p-3"> <span className="text-2xl">🚀</span></button>
        </div>
      </div>
    </Card>
  )
}