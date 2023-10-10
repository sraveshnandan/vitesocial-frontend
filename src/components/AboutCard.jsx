import Card from "./Card"

export default function  AboutCard (){
  return(
    <Card>
     <h2 className="text-xl font-semibold text-slate-600">About </h2>
     <p className="mt3 text-grey-800 text-sm  font-semibold justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum voluptas incidunt error tenetur voluptatibus voluptate. Consectetur, tenetur perspiciatis? Magni deserunt magnam perspiciatis eos animi.</p>

     <p className=" mt-3 text-sky-400">Joined in : <span className="text-slate-600">{new Date().getFullYear()}</span></p>
    </Card>
  )
}