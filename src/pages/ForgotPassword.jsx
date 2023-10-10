import Card from "../components/Card.jsx";
import {Header} from "../components/Header.jsx";
import {useState} from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    return (
        <>
            <Header/>
            <div className=" md:w-1/3 w-[90%] mx-auto">
                <Card>

                    <div className="w-full flex items-center justify-center bg-inherit h-max">
                        <div
                            className="md:w-full w-full mt-4 flex flex-col items-center h-fit bg-slate-200 rounded-md p-2">
                            <span className="text-2xl font-semibold text-sky-400">Forgot Password</span>
                            <form className="flex flex-col p-2 w-full rounded-sm  ">
                                <label className="md:text-md  text-sm font-semibold  my-2">Email : </label>
                                <input
                                    className="w-full px-5 py-2 font-semibold rounded-md "
                                    type="email"
                                    value={email}
                                    required={true}
                                    onChange={ev => setEmail(ev.target.value)}
                                />

                                <button
                                    className="w-full px-5 py-2 bg-sky-400 my-4 rounded-md text-white font-semibold ">Send
                                    verification link
                                </button>

                            </form>
                        </div>

                    </div>
                </Card>
            </div>


        </>


    )
}