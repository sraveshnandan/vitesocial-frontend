import {Header} from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import {useState} from "react";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [conf_password, setConf_password] = useState("")
    return (
        <>
            <Header/>
            <div className=" md:w-1/3 w-[90%] mx-auto">
                <Card>

                    <div className="w-full flex items-center justify-center bg-inherit h-max">
                        <div
                            className="md:w-full w-full mt-4 flex flex-col items-center h-fit bg-slate-200 rounded-md p-2">
                            <span className="text-2xl font-semibold text-sky-400">Reset Your Password</span>
                            <form className="flex flex-col p-2 w-full rounded-sm  ">

                                <input
                                    className="w-full px-5 py-2 font-semibold rounded-md my-2 "
                                    type="password"
                                    placeholder="Enter New Password"
                                    value={password}
                                    required={true}
                                    onChange={ev => setPassword(ev.target.value)}
                                />
                                <input
                                    className="w-full px-5 py-2 font-semibold rounded-md my-2 "
                                    type="Conferm Password"
                                    placeholder="Conferm Password"
                                    value={conf_password}
                                    required={true}
                                    onChange={ev => setConf_password(ev.target.value)}
                                />

                                <button
                                    className="w-full px-5 py-2 bg-sky-400 my-4 rounded-md my-2 text-white font-semibold ">Reset
                                    Password
                                </button>

                            </form>
                        </div>

                    </div>
                </Card>
            </div>


        </>
    )

}