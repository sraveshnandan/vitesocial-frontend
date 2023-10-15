
// eslint-disable-next-line react/prop-types
export default function Card ({children, noPadding}){
  let  padding = "p-4";
  if (noPadding === true) {
    padding = "p-[1rem]";

  }
  let classes = `bg-white shadow-md shadow-grey-300 rounded-md ${padding} mb-5`;

  return(
    <div className={classes}>
      {children}
    </div>
  )
}