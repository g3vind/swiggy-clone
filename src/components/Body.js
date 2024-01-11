import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { API_CDN } from "../utils/constants.js";
import Banner from "./Banner.js";
import Offline from "../pages/Offline.js";
import TopRest from "./TopRest.js";
import OnlineRest from "./OnlineRest.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRest, setTopRest] = useState([]);
  const [onlineRest, setOnlineRest] = useState([]);
  const [onlineTitle, setOnlineTitle] = useState("");
  const [bannerData, setBannerData] = useState([]);
  const [bodyTitle, setBodyTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();

      // FIRST ROW
      setBannerData(
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
          (bannerInfo) => ({
            id: bannerInfo.id,
            imageId: bannerInfo.imageId,
            action: bannerInfo.action,
          })
        ) || []
      );
      // SECOND ROW
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setBodyTitle(json?.data?.cards[1]?.card?.card?.header?.title);
      setTopRest(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // THIRD ROW

      setOnlineRest(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setOnlineTitle(json?.data?.cards[2]?.card?.card?.title);
      console.log("online rest", onlineRest);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <div className="overflow-hidden p-8">
      {/* What's on your mind? */}
      <Banner banners={bannerData} />
      {/* Top restaurant chains in Vellore */}
      <TopRest listOfRestaurants={listOfRestaurants} bodyTitle={bodyTitle} />
      {/* Restaurants with online food delivery in Vellore */}
      {/* <OnlineRest {...onlineRest?.info} title={onlineTitle} /> */}
    </div>
  );
};

export default Body;
