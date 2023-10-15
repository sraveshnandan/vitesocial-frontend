import {Link} from "react-router-dom";
import {useState} from "react";


import FormLayout from "../components/Layouts/FormLayout.jsx";
import axios, {toFormData} from "axios";

const Register = () => {
    const [username, setusername] = useState("");
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [conf_password, setConf_password] = useState()
    const [password, setpassword] = useState("");

    const handleRegister = (ev)=>{
        ev.preventDefault();

        axios.post("/user/register", {username,fullName,email,password}).then(data=>{
            console.log(data.data);
            alert(data.data.message);
            window.location.replace("/login")

        })

    }

    return (<>

           <FormLayout>
               <div className="  p-2 flex flex-col items-center justify-center md:w-1/2  w-full bg-slate-100 rounded-md ">

                   {/*Heading*/}
                   <div className=" w-full pl-3 flex flex-col">
                       <span className="font-semibold text-2xl text-sky-400">Register...</span>
                       {/* eslint-disable-next-line react/no-unescaped-entities */}
                       <span className="font-semibold text-sm text-black">Let's create your account.</span>
                   </div>

                   <div className="w-full mt-3">
                       <form onSubmit={handleRegister} className="w-full flex flex-col">
                           <input
                               className="w-80% px-5 py-2 mb-2 rounded-md font-semibold "
                               type="text"
                               placeholder="User Name"
                               value={username}
                               onChange={ev => setusername(ev.target.value)}
                           />

                           <input
                               className="w-80% px-5 py-2 mb-2 rounded-md font-semibold "
                               type="text"
                               placeholder="Full Name"
                               value={fullName}
                               onChange={ev => setFullname(ev.target.value)}
                           />

                           <input
                               className="w-80% px-5 py-2 mb-2 rounded-md font-semibold "
                               type="text"
                               placeholder="Email"
                               value={email}
                               onChange={ev => setEmail(ev.target.value)}
                           />

                           <input
                               className="w-80% px-5 py-2 mb-2 rounded-md font-semibold "
                               type="password"
                               placeholder="Password"
                               value={password}
                               onChange={ev => setpassword(ev.target.value)}
                           />

                           <input
                               className="w-80% px-5 py-2 mb-2 rounded-md font-semibold "
                               type="password"
                               placeholder="Conferm Password"
                               value={conf_password}
                               onChange={ev => setConf_password(ev.target.value)}
                           />

                           <div className="flex gap-2 mb-2"><input id="check" type="checkbox"/> <label
                               className="cursor-pointer text-slate-400 font-semibold" htmlFor="check">I consent to
                               provide my information.</label></div>

                           <button type="submit"
                                   className="w-full text-center py-2 bg-sky-400 rounded-md font-semibold text-white transition-all hover:shadow-slate-400 duration-500 hover:rounded-full hover:shadow-lg">Register
                           </button>
                       </form>
                       <div className="w-full my-2 flex flex-col">
                           <Link to="/forgotpassword" className='text-sm mt-5 text-black font-semibold  '>Already have
                               an account ? <Link className=' text-gery-600 hover:text-sky-400'
                                                  to="/login">Login</Link></Link>
                       </div>

                   </div>


               </div>
           </FormLayout>


    </>
    )
}
export default Register;