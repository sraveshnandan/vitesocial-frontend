
import Layout from "../components/Layouts/Layout";
import Msg from "../components/Notification"


export default function Notification() {
  console.log(Msg)
    return (

    <Layout>
      <div className="mb-5">
        <span className=" text-2xl text-slate-400 ">Notification</span>
      </div>

      {/* Notification area  */}
      <div className=" py-4 mr-4 max-h-[80%]">
        <Msg data={"likes"} />
        <Msg data={"comment"} />
        <Msg data={"shared"} />
        <Msg data={"shared"} />
       

      </div>




    </Layout>

  )
}
