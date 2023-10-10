import {Link} from "react-router-dom";
import Card from "./Card";
import Avatar from "./Avatar"
// eslint-disable-next-line react/prop-types
export default function Msg ({data})
{
    return(
    <Card>
      <div className="flex gap-2 items-center">
        <Avatar/>
      <span><Link to="/" className="hover:underline mx-2">User Name</Link><span className="">{data}</span><Link to="/" className=" mx-2 text-sky-400">your posts.</Link></span>
      </div>
    </Card>
  )
}