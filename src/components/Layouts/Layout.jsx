import { Header } from "../Header";
import NavigationPanel from "../NavigationPanel";
import { Recomended } from "../Recomended";
import Trending from "../Trending";

// eslint-disable-next-line react/prop-types
export default function Layout ({children}){
  return(
   <>
       {/*//sticky header*/}
   <div className="w-full fixed  md:w-6xl mx-auto  -mb-2">
   <Header/>
   </div>
   {/*Outer section */}
    <div className=" md:flex mt:15  max-w-6xl h-fit md:mx-auto mx-2 py-4 gap-4 ">
    {/* Left section  */}
    <div className="md:w-1/4 w-full   fixed md:mt-14  bottom-0 md:static  -mb-5  ">
          <NavigationPanel/>
      <div className="hidden  md:block">
      <Trending/>
      </div>
    </div>
    {/* Middle section  */}
    <div className=" w-full h-[90%] overflow-y-scroll-scroll  mt-14  md:w-2/4 grow ">
      {children}
    </div>
    {/* Right section  */}
        <div className="md:w-1/4 w-full   fixed md:mt-14  bottom-0 md:static  -mb-5  ">
            <div className="hidden  md:block">
                <Recomended/>
            </div>
        </div>
  </div>
  </>
  )
}