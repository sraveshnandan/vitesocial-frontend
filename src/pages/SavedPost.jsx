import Layout from "../components/Layouts/Layout";
import PostCard from "../components/PostCard";

export default function SavedPosts  (){
  return(
    <>
    <Layout>
   <div className="mb-5">
   <span className=" text-2xl text-slate-400 ">Your Saved Posts.</span>
   </div>
   
    <PostCard/>

    </Layout>
    </>
  )
}