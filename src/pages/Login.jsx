import {useState} from "react";
import {Header} from "../components/Header";
import {Link} from "react-router-dom";


const LoginPage = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    let data = {};
    data.username = username;
    data.password = password;

    const loginWithGoogle = (ev) => {
        console.log(ev)

    }
    const handleLoginFunction = async (ev) => {
        ev.preventDefault();

    };
    return (
        <>
            <Header/>

            <div className="w-full flex h-fit px-3 py-5 items-center justify-center ">
                {/* Wrapper */}
                <div className=" md:w-[60%] w-[100%] mx-auto bg-white flex p-2 gap-2 rounded-lg duration-500 shadow-lg">
                    {/*  Login Form container  */}
                    <div className=" md:w-1/2  w-full bg-gray-100 px-5 py-2  flex flex-col rounded-md ">
                        <span className='font-bold text-sky-400 mb-2 text-2xl '>Login ...</span>
                        <span className='font-semibold text-black text-[12px]'>Please login to your account</span>
                        {/* Form box */}
                        <form onSubmit={handleLoginFunction} className='flex flex-col gap-4 mt-4 '>
                            <input
                                type="text"
                                placeholder='User Name'
                                value={username}
                                onChange={ev => setusername(ev.target.value)}
                                className='px-5 py-2 text-md font-semibold rounded-md '
                            />

                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={ev => setpassword(ev.target.value)}
                                className='px-5 py-2 text-md font-semibold rounded-md '
                            />

                            <button type='submit'
                                    className='w-full bg-sky-400 hover:shadow-lg duration-500 text-center hover:shadow-slate-400 font-semibold text-white px-5 py-2 rounded-md hover:rounded-full'>Login
                            </button>
                        </form>
                        {/* atfer forms */}
                        <div className="w-full flex items-center  justify-between mt-5">
                            <hr/>
                            OR
                            <hr/>
                        </div>

                        {/* Oauth section  */}
                        <Link to="/"
                            className='w-full mt-5 bg-white text-center font-semibold duration-500 hover:shadow-lg hover:shadow-slate-400 transition-all text-black px-5 py-2 rounded-md hover:rounded-full'> 🔐
                            Login with Google</Link>

                        {/* Extra section */}
                        <div className="w-full mt-8 flex flex-col">
                            <Link to="/forgotpassword"
                                  className='text-sm text-black font-semibold hover:text-sky-400 '>Forgot
                                Password</Link>
                            <Link onClick={loginWithGoogle} to="/forgotpassword"

                                  className='text-sm mt-5 text-black font-semibold '>Dont have an account ? <Link
                                className=' text-gery-600 hover:text-sky-400' to="/register">Register</Link></Link>
                        </div>
                    </div>

                    {/*next box*/}

                    <div className="md:w-1/2 rounded-md bg-sky-400">
                        {/*Img box*/}
                    </div>
                </div>
            </div>
        </>

    )
}
export default LoginPage;