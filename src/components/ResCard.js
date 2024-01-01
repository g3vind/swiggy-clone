import { IMG_CDN_URL } from "../utils/constants";
import vagIcon from "../images/vagIcon.svg";

const ResCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
  areaName,
  aggregatedDiscountInfoV3,
}) => {
  const cardWidth = "w-60"; // Set the desired width

  return (
    <div
      className={`${cardWidth} mb-6  flex flex-col justify-center gap-2 transition-all hover:scale-95`}
    >
      <div
        className={`${cardWidth} h-40 relative justify-center overflow-hidden rounded-2xl bg-cover bg-center`}
      >
        <img
          src={`${IMG_CDN_URL + cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <p
          className={`absolute bottom-2 left-2 z-10 text-xs font-bold text-white`}
        >
          <span className="whitespace-nowrap block">
            {aggregatedDiscountInfoV3?.header}
          </span>
          <span className="whitespace-nowrap block">
            {aggregatedDiscountInfoV3?.subHeader}
          </span>
        </p>
        <div className="gradient-box absolute bottom-0 left-0 h-full w-full"></div>
      </div>

      <div className="text-slate-600">
        <h2 className="font-bold text-[14px] line-clamp-1">{name}</h2>
        <div className="flex items-center gap-1">
          <img className="w-3" src={vagIcon} alt="" />
          <p className="flex items-center gap-1 font-bold text-light text-xs">
            <span>{avgRating}</span>
            <span className="bg-slate-600 w-1 h-1 rounded-full"></span>
            <span className="text-xs whitespace-nowrap">{sla?.slaString}</span>
          </p>
        </div>
        <p className="text-slate-600 line-clamp-1">{cuisines?.join(", ")}</p>
        <p className="text-slate-600 line-clamp-1">{areaName}</p>
      </div>
    </div>
  );
};

export default ResCard;
