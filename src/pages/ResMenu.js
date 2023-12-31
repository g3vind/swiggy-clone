import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { CiDiscount1 } from "react-icons/ci";
import useResMenu from "../hooks/useResMenu";
import { MdDeliveryDining } from "react-icons/md";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    city,
    areaName,
    avgRating,
    headerBanner,
    locality,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatings,
    aggregatedDiscountInfoV2,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(resInfo);

  return (
    <>
      <div className="menu-container flex flex-row">
        <div className="left">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
          <p className="text-center ml-60 rating">
            <span className="font-bold text-center"> {avgRating}</span>⭐ |{" "}
            {totalRatings}
            +ratings
          </p>
          <h2
            className={`text-center relative left-32 mt-8 font-bold text-2xl ${
              headerBanner?.isOpen ? "text-red-500" : "text-green-500"
            }`}
          >
            {headerBanner?.isOpen ? "Currently Closed 😞" : "Currently Open 😃"}
          </h2>
        </div>
        <div className="right">
          <h1 className="text-3xl font-bold mt-5 mb-2">{name}</h1>
          <hr></hr>
          <div>
            <h2 className="text-xl font-bold">{cuisines?.join(", ")}</h2>
          </div>
          <hr></hr>
          <div>
            <h2>
              <p className="font-medium">
                <span className="font-semibold">Address: </span> {locality},
                {areaName},
              </p>
              <p>
                <span className="font-semibold">City:</span>
                <span> {city}</span>
              </p>
            </h2>
            <h3 className="inline-block">
              <span className="font-bold">
                {" "}
                Delivery Charge{" "}
                <MdDeliveryDining className="inline-block font-semibold" />:{" "}
              </span>
              <span> ₹{feeDetails?.amount}</span>
            </h3>
          </div>
          <hr></hr>
          <div className="discount">
            <p className="flex items-center">
              <span className="mr-2 h-4 w-3">
                <CiDiscount1 />
              </span>
              {aggregatedDiscountInfoV2?.header}
            </p>
          </div>
          <div className="discount">
            <p>{costForTwoMessage}</p>
          </div>
          <h3 className="text-xl font-semibold mb-2">Available Dishes</h3>
          <ul className="dishes-list">
            {itemCards && itemCards.length > 0 ? (
              itemCards.map((item) => (
                <li key={item?.card?.info?.id} className="dish-card">
                  <div className="dish-image-container">
                    <img
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  </div>
                  <div className="dish-details">
                    <p className="dish-name">{item?.card?.info?.name}</p>

                    <p className="dish-price">
                      ₹
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-2xl border-2 bg-slate-300 no-dishes">
                No dishes at the moment. 😢
              </p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ResMenu;
