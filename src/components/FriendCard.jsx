import Avatar from "./Avatar";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function FriendsCard() {

  return (
    <Card>
      {/* Outer Friends card  */}
      <div className="grid  md:grid-cols-2">
        {/* main friend card  */}

     

        
        <div className="flex gap-3 items-center mt-4 justify-start ">
          <Avatar /> <span><Link className="hover:underline font-semibold hover:text-sky-400"  >User Name</Link></span>
        </div>

        <div className="flex gap-3 items-center mt-4 justify-start ">
          <Avatar /> <span><Link className="hover:underline font-semibold hover:text-sky-400"  >User Name</Link></span>
        </div>

        <div className="flex gap-3 items-center  mt-4 justify-start ">
          <Avatar /> <span><Link className="hover:underline font-semibold hover:text-sky-400"  >User Name</Link></span>
        </div>

        <div className="flex gap-3 items-center mt-4 justify-start ">
          <Avatar /> <span><Link className="hover:underline font-semibold hover:text-sky-400"  >User Name</Link></span>
        </div>
         
      </div>

    </Card>
  )
}