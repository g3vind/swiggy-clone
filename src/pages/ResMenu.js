import { useParams } from "react-router-dom";
import ResCardShimmer from "../shimmers/ResCardShimmer";
import useResMenu from "../hooks/useResMenu";
import { IMG_CDN_URL } from "../utils/constants";

import { useState } from "react";
import { Search, Clock8, IndianRupee } from "lucide-react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) {
    return <ResCardShimmer />;
  }

  const {
    name,
    cuisines,
    city,
    sla,
    areaName,
    avgRating,
    totalRatings,
    costForTwoMessage,
    feeDetails,
    aggregatedDiscountInfo,
    aggregatedDiscountInfoV2,
    header,
    description,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(resInfo);

  return (
    <>
      <div className="mr-40 ml-40">
        <div className="flex flex-col items-center justify-center gap-8 py-8 text-zinc-500">
          <div className="flex sm:w-11/12 w-9/12 flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-400">
                <span>Home</span> /{" "}
                <span>
                  {city},{areaName}
                </span>{" "}
                / <span className="text-gray-600"> {name} </span>
              </div>
              <Search />
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-6 px-3">
              <div className="flex w-full items-start justify-between">
                <div className="text-xs">
                  <div className="flex flex-row">
                    <h2 className="mb-3 text-xl font-bold text-black xs:text-lg ">
                      {name}
                    </h2>
                  </div>
                  <p>{cuisines?.join(", ")} </p>
                  <p>
                    {areaName}, {feeDetails?.message}
                  </p>
                  <span className="text-sm font-md text-gray-500">
                    <small> Delivery Charge: </small>
                    <small>
                      {feeDetails?.amount
                        ? "₹" + Math.round(feeDetails.amount / 10 + 30)
                        : "N/A"}{" "}
                      | {sla?.lastMileTravelString}
                    </small>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-md border p-2 text-xs">
                  <div className="flex items-center justify-start gap-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
                      className="w-4"
                      alt=""
                    />
                    <span className="font-bold text-green-600 ">
                      {" "}
                      {avgRating}
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-slate-300"></div>
                  <span className="whitespace-nowrap font-mono">
                    <span className="font-mono">{totalRatings}+ ratings</span>
                  </span>
                </div>
              </div>
              <div className="w-full border-t-[2px] border-dotted border-gray-300"></div>

              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-row items-center justify-start gap-4 xs:gap-1 font-bold text-black">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <img className="xs:w-3" src="" alt="" />
                    <span className="text-sm">
                      <span className="flex items-center px-2">
                        <span className="pr-2">
                          <Clock8 size={17} />
                        </span>
                        {sla?.slaString}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <IndianRupee className="xs:w-3" size={17} />
                    <span className="text-sm xs:text-xs">
                      <span className="flex items-center -px-2"></span>
                      {costForTwoMessage}
                    </span>
                  </div>
                </div>
              </div>
              {/* DISCOUNT */}
              <div className="menu-container flex flex-row justify-center items-center -ml-96 mr-36 ">
                <div className="inline-block rounded-md border p-2 text-xs gap-4 mb-2 mr-2 ">
                  <div className="text-sm xs:text-xs font-bold text-zinc-600 whitespace-nowrap mb-1 flex items-center gap-2">
                    <span>
                      {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
                    </span>
                  </div>
                </div>
                <div className="inline-block rounded-md border p-2 text-xs gap-4 mb-2">
                  <div className="text-sm xs:text-xs font-bold text-zinc-600 whitespace-nowrap mb-1 flex items-center gap-2">
                    <span>
                      {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------Dishes Accordions------------------------- */}
        <div className="flex flex-row flex-wrap justify-end mr-20 p-4 items-center m-4">
          <ul className="p-4">
            {itemCards && itemCards.length > 0 ? (
              itemCards.map((item) => (
                <li key={item?.card?.info?.id} className="dish-card p-2">
                  <div className="">
                    <img
                      className="h-20 w-30 border-none object-contain"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  </div>

                  {/* DISH PRICE */}
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
