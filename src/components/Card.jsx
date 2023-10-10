
// eslint-disable-next-line react/prop-types
export default function Card ({children, noPadding}){
  let classes = 'bg-white shadow-md shadow-grey-300 rounded-md p-4 mb-5';
  if (noPadding) {
    classes += 'p-0';
    
  }
  return(
    <div className={classes}>
      {children}
    </div>
  )
}