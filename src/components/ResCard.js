import { IMG_CDN_URL } from "../utils/constants";
import vagIcon from "../images/vagIcon.svg";
import { MdFiberNew } from "react-icons/md";
const ResCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
  areaName,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="h-64 w-56 mb-6 ml-1.5 flex flex-col gap-3 transition-all hover:scale-95">
      <div className="flex flex-row relative justify-center gap-2 items-center overflow-hidden rounded-2xl bg-cover bg-center">
        <img
          src={`${IMG_CDN_URL + cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <p
          className={`absolute bottom-2 left-2 z-10 text-xl font-extrabold text-white`}
        >
          <span className="whitespace-nowrap block">
            {aggregatedDiscountInfoV3?.header}
          </span>
          <span className="whitespace-nowrap block">
            {aggregatedDiscountInfoV3?.subHeader}
          </span>
        </p>
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

// HIGHER ORDER COMPONENT - takes and returns a component
export const WithOpenLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <MdFiberNew
          className="absolute ml-52 -mt-5 mb-6"
          size={25}
          color="orange"
        />
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
