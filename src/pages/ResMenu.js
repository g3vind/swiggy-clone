import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { CiDiscount1 } from "react-icons/ci";
import useResMenu from "../hooks/useResMenu";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  // for showing discount
  const [showDiscount, setShowDiscount] = useState(false);

  const toggleDiscountButton = () => {
    setShowDiscount(!showDiscount);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    city,
    sla,
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
            {headerBanner?.isOpen ? (
              <p id="blink">Currently Closed 🔴</p>
            ) : (
              <p id="blink">Currently Open 🟢</p>
            )}
          </h2>
          <button
            id="discount-btn"
            className={showDiscount ? "bg-blue-500" : "bg-green-500 "}
            onClick={toggleDiscountButton}
          >
            {showDiscount ? "Hide Coupons❌" : "Show Discount Coupons"}
          </button>

          {showDiscount && (
            <div className="flex flex-col relative left-44">
              <div className="mt-6 discount-text relative left-24 bg-red-500 text-white p-4 rounded-md shadow-md">
                <p className="flex items-center justify-center">
                  <span className="mr-2 discount-text">
                    <CiDiscount1 className="text-white" />
                  </span>
                  <span className="discount-text items-center">
                    {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
                  </span>
                </p>
              </div>
              <div className="mt-2 discount-text relative left-24 bg-red-500 text-white p-4 rounded-md shadow-md mb-4">
                <p className="flex items-center justify-center">
                  <span className="mr-2 discount-text">
                    <CiDiscount1 className="text-white" />
                  </span>
                  <span className="discount-text items-center">
                    {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        {/* ----------------RIGHT------------------------- */}
        <div className="right">
          <h1 className="text-3xl font-bold mt-5 mb-2 text-red-500">{name}</h1>

          <div>
            <h2 className="text-xl font-bold">{cuisines?.join(", ")}</h2>
          </div>

          <div>
            <h2>
              <p className="font-medium">
                <span className="font-semibold">Area: </span> {locality},
                {areaName},
              </p>
              <p>
                <span className="font-semibold">City:</span>
                <span> {city}</span>
              </p>
            </h2>
            <h2>
              <span className="font-semibold">Distance: </span>
              {sla.lastMileTravelString}
            </h2>

            <h3 className="inline-block">
              <span className="font-bold">
                {" "}
                Delivery Charge{" "}
                <MdDeliveryDining className="inline-block font-semibold" />:{" "}
              </span>
              <span className="text-xl font-bold text-green-500">
                {feeDetails?.amount
                  ? "₹" + Math.round(feeDetails.amount / 10 + 30)
                  : "N/A"}
              </span>
            </h3>
          </div>

          <div className="discount">
            {/* <p className="flex items-center">
              <span className="mr-2 h-4 w-3">
                <CiDiscount1 />
              </span>
              {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
            </p> */}
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
