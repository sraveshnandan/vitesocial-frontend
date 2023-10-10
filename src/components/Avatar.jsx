// eslint-disable-next-line react/prop-types
export default function Avatar({size}) {
  let  dimension = 'w-14 h-14';
  if(size === 'md'){
    dimension = 'w-24 h-24'
  }else if(size === 'lg'){
    dimension = 'w-40 h-40'
  }

  return (

    <div>
      <div className={`flex items-center justify-center text-2xl ${dimension} bg-sky-200 rounded-full overflow-hidden`}>
        <span>🤴</span>
      </div>
    </div>
  )
}