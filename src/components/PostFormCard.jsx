import Avatar from "./Avatar";
import Card from "./Card";

export default function PostFormCard() {
  return (
    <Card>

      {/* Post form haeder section  */}
      <div className="flex items-center gap-1">
        <Avatar />
        <textarea className="grow font-semibold outline-slate-200 overflow-hidden focus:border-slate-400  p-3 h-14 " placeholder=" What's in your mind ${UserName}" />
      </div>

      {/* Post form section bottom  */}
      <div className="flex  items-center mt-4">
        <div>
          <button className="text-sm items-center flex gap-1 hover:text-white hover:bg-sky-400  font-semibold border  border-sky-400 mr-2 px-2 rounded-full py-1"> <span>🤼</span>People</button>
        </div>
        <div>
          <button className="text-sm items-center flex gap-1 border hover:text-white hover:bg-sky-400  font-semibold border-sky-400 mr-2 px-2 rounded-full py-1"> <span>🚩</span >Place</button>
        </div>
        <div>
          <button className="text-sm items-center flex gap-1 border hover:text-white hover:bg-sky-400  font-semibold border-sky-400 mr-2 px-2 rounded-full py-1"> <span>😃</span>Mood</button>
        </div>
        <div className="grow text-right ">
          <button className="bg-sky-400 text-white px-6 py-1 rounded-md hover:shadow-lg "><span className="font-semibold">Share</span></button>
        </div>

      </div>
    </Card>
  )
}