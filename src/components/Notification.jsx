import { Link } from "react-router-dom";
import Card from "./Card";
import Avatar from "./Avatar"
export default function Msg ({data})
{
  let action = data;
  return(
    <Card>
      <div className="flex gap-2 items-center">
        <Avatar/>
      <span><Link className="hover:underline mx-2">User Name</Link><span className="">{action}</span><Link className=" mx-2 text-sky-400">your posts.</Link></span>
      </div>
    </Card>
  )
}