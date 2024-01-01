import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { API_CDN } from "../utils/constants.js";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import ResCardShimmer from "../shimmers/ResCardShimmer.js";
import Banner from "./Banner.js";
import Offline from "../pages/Offline.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [bannerData, setBannerData] = useState([]);
  const [bannerTitle, setBannerTitle] = useState("");
  const [bodyTitle, setBodyTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();
      // console.log(json.data);
      setListOfRestaurants(
        !json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
      );

      setBannerData(
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
          (bannerInfo) => ({
            id: bannerInfo.id,
            imageId: bannerInfo.imageId,
            action: bannerInfo.action,
          })
        ) || []
      );
      setBannerTitle(json?.data?.cards[0]?.card?.card?.header?.title);
      setBodyTitle(json?.data?.cards[2]?.card?.card?.title);
      // console.log(bannerData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <div className="overflow-hidden">
      {/* ------------------BANNER COMPONENT----------------------------- */}
      <Banner banners={bannerData} bannerTitle={bannerTitle} />

      {/* RES CARDS TITLE */}
      <span id="txt" className="font-extrabold relative -mt-32 ml-32 mb-4">
        {bodyTitle}
      </span>
      {/*----------------------- RES CARDS ----------------------------------*/}
      <div className="ml-24">
        <div className="">
          <div className="">
            <div className="flex flex-wrap">
              {listOfRestaurants?.length > 0 ? (
                listOfRestaurants.map((restaurant, index) => (
                  <Link
                    key={restaurant?.info?.id}
                    to={"/restaurants/" + restaurant?.info?.id}
                    className={`mr-4 ${index % 5 === 4 ? "mb-4" : ""}`} // Add margin bottom every 5th element
                  >
                    <ResCard {...restaurant.info} />
                  </Link>
                ))
              ) : (
                <ResCardShimmer />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
