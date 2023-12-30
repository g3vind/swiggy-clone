import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { CiDiscount1 } from "react-icons/ci";

const ResMenu = () => {
  // state to store rest menu data
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  // use effect to load data in every render
  useEffect(() => {
    fetchMenu();
  }, []);
  // async function to fetch data
  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
    console.log(json);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    city,
    areaName,
    avgRating,
    labels,
    locality,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatings,
    aggregatedDiscountInfoV2,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  // // const { itemCards } =
  // //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  // //     ?.card || {};
  // const { itemCards } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(itemCards);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

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
        </div>
        <div className="right">
          <h1 className="text-2xl font-bold mt-5">{name}</h1>
          <div>
            <h2>{cuisines?.join(", ")}</h2>
          </div>
          <div>
            <h2>
              <p className="font-medium">
                Address:{locality},{areaName},{city}
              </p>
            </h2>
          </div>
          <div className="discount">
            <p className="flex items-center">
              <span className="mr-2">
                <CiDiscount1 />
              </span>
              {aggregatedDiscountInfoV2?.header}
            </p>
          </div>
          <div className="discount">
            <p>{costForTwoMessage}</p>
          </div>
          <ul>
            {itemCards &&
              itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - Rs.
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ResMenu;
