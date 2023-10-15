import Avatar from "./Avatar";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function FriendsCard({friend}) {
  console.log(friend)

  return (
    <Card>
      {/* Outer Friends card  */}
      <div className="grid  md:grid-cols-2">
        {/* main friend card  */}
     

        
        <div className="flex gap-3 items-center mt-4 justify-start ">
          <Avatar img={friend?.avatar?.public_url} /> <span><Link to={`/user/${friend._id}`} className="hover:underline font-semibold hover:text-sky-400"  >{ friend && friend.fullName}</Link></span>
        </div>

      </div>

    </Card>
  )
}