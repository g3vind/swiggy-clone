import { IMG_CDN_URL } from "../utils/constants";

const ResCard = ({ cloudinaryImageId, name, avgRating, cuisines, sla }) => {
  return (
    <div className="res-card flex flex-col">
      <img
        className="w-300"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3 className="font-extrabold">{name}</h3>
      </div>
      <h4>
        ⭐{avgRating}stars • <span>{sla.deliveryTime} minutes</span>
      </h4>
      <small className="mt-2 font-serif text-center font-extralight">
        {cuisines.slice(0, 3).join(", ")}
      </small>

      {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
      <h4></h4>
    </div>
  );
};

export default ResCard;
