import { Header } from "../Header";
import NavigationPanel from "../NavigationPanel";
import { Recomended } from "../Recomended";
import Trending from "../Trending";

// eslint-disable-next-line react/prop-types
export default function Layout ({children}){
  return(
   <>
   <div className="w-full md:w-6xl mx-auto  -mb-2">
   <Header/>

   </div>
   
    <div className=" md:flex max-w-6xl h-fit md:mx-auto mx-2 py-4 gap-6   ">
    {/* Left section  */}
    <div className="md:w-1/4 w-full  fixed bottom-0 md:static  -mb-5  ">
      <NavigationPanel/>
      <div className="hidden md:block">
      <Trending/>
      </div>
    </div>

    {/* Middle section  */}
    <div className=" w-full md:w-2/4 grow ">
      {children}
      
    </div>
    {/* Right section  */}
    <div className=" md:block hidden w-1/4">
      <Recomended/>
    </div>

  </div>
  </>
  )
}