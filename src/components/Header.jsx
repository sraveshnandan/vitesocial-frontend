import { Link } from "react-router-dom"
import Card from "./Card"
export const Header = () => {
  return (

    <>
      <div className="w-full mx-auto">
        <Card>

          <div className=" w-full md:px-10 flex items-center justify-between  ">

            <div className="logo">
              <Link to="/"><span className="text-2xl font-semibold text-slate-600 hover:text-sky-400">✋Social </span></Link>
            </div>

            <div className="links">
              <Link to="/login" className=" duration-500 bg-sky-400 px-5 py-2 mx-2 hover:shadow-lg hover:shadow-slate-400 rounded-full  font-semibold text-white "><span>Login</span></Link>
              <Link to="/login" className=" duration-500 bg-sky-400 px-5 py-2 mx-2 hover:shadow-lg hover:shadow-slate-400 rounded-full  font-semibold text-white "><span>Register</span></Link>

            </div>
          </div>


        </Card>
      </div>

    </>


  )
}