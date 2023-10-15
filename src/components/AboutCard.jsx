import Card from "./Card"

export default function  AboutCard ({profile}){
    let date = profile.createdAt;
    let data = new Date(date*1000)
    console.log(data.toLocaleString())
  return(
    <Card>
     <h2 className="text-xl font-semibold text-slate-600">About </h2>
     <p className="mt3 text-slate-400 text-sm  font-semibold justify mt-1 ">{profile.about}</p>

     <p className=" mt-3 text-sky-400">Joined in : <span className="text-slate-600">{data.toLocaleString()}</span></p>

        <p className=" mt-3 text-sky-400">Profile views : <span className="text-slate-600">{profile.profile_views}</span></p>

        <p className=" mt-3 text-sky-400">Followers : <span className="text-slate-600">{profile.followers?.length}</span></p>

        <p className=" mt-3 text-sky-400">Following : <span className="text-slate-600">{profile.following?.length}</span></p>
    </Card>
  )
}