import { IMG_CDN_URL } from "../utils/constants";

const ResCard = ({ cloudinaryImageId, name, avgRating, cuisines, sla }) => {
  return (
    <div className="res-card flex flex-col">
      <img
        className="w-300"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="">
        <h3 className="font-extrabold text-xl ml-2 text-gray-700">
          {name.slice(0, 20)}
        </h3>
      </div>

      <h4>
        <span className="medtext">⭐{avgRating}stars</span> •
        <span className="font-semibold ">{sla?.deliveryTime} minutes</span>
      </h4>

      <small className="mt-2 font-serif text-center font-extralight">
        {cuisines.slice(0, 3).join(", ")}
      </small>
    </div>
  );
};

export default ResCard;
