import {Header} from "../Header.jsx";


// eslint-disable-next-line react/prop-types
export default function FormLayout({children}) {
    return (
        <>
            <Header/>

            <div className="w-full flex h-fit px-3 py-5 items-center justify-center ">
                {/* Wrapper */}
                <div className=" md:w-[60%]  w-[100%] mx-auto bg-white flex p-2 gap-2 rounded-lg duration-500 shadow-lg">
                    {/*  Form container  */}

                    {children}

                    {/*next box*/}
                    <div className="md:w-1/2  rounded-md bg-sky-400">
                        {/*Img box*/}
                    </div>

                </div>
            </div>
        </>
    )
}