// eslint-disable-next-line react/prop-types
export default function Avatar({ size, img }) {
  let dimension = "w-14 h-14";
  if (size === "md") {
    dimension = "w-24 h-24";
  } else if (size === "lg") {
    dimension = "w-40 h-40";
  } else if (size === "sm") {
    dimension = "w-10 h-10";
  }

  return (
    <div>
      <div
        className={` shadow-sm shadow-slate-400 flex items-center justify-center text-2xl ${dimension} bg-sky-100 rounded-full overflow-hidden`}
      >
        {(img && img != "") || img === "upload.secure_url" ? (
          <img className="w-full h-full" src={img} />
        ) : (
          <span>😀</span>
        )}
      </div>
    </div>
  );
}
