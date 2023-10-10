import Card from "./Card";

export default function PhotoCard (){
  return(
    <Card>
      {/* outer container  */}
      <div className="grid gap-1 md:grid-cols-2">
        {/* inner element  */}
        <div className="m-2 rounded overflow-hidden">
          <div className="w-full h-[150px] bg-sky-400"></div>
        </div>

        <div className="m-2 rounded overflow-hidden">
          <div className="w-full h-[150px] bg-sky-400"></div>
        </div>

        <div className="m-2 rounded overflow-hidden">
          <div className="w-full h-[150px] bg-sky-400"></div>
        </div>

        <div className="m-2 rounded overflow-hidden">
          <div className="w-full h-[150px] bg-sky-400"></div>
        </div>

       

      </div>
    </Card>
  )
}