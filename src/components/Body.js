import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { API_CDN } from "../utils/constants.js";
import Banner from "./Banner.js";
import Offline from "../pages/Offline.js";
import Round from "./Round.js";
import TopRest from "./TopRest.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRest, setTopRest] = useState([]);
  const [round, setRound] = useState([]);
  const [roundTitle, setRoundTitle] = useState("");
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
      console.log(json.data);
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setTopRest(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(topRest);

      setBannerData(
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
          (bannerInfo) => ({
            id: bannerInfo.id,
            imageId: bannerInfo.imageId,
            action: bannerInfo.action,
          })
        ) || []
      );
      setRound(
        json?.data?.cards[1]?.card?.card?.imageGridCards?.info.map(
          (bannerInfo) => ({
            id: bannerInfo.id,
            imageId: bannerInfo.imageId,
            action: bannerInfo.action,
          })
        ) || []
      );
      setRoundTitle(json?.data?.cards[1]?.card?.card?.header?.title);

      setBodyTitle(json?.data?.cards[2]?.card?.card?.header?.title);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <div className="overflow-hidden p-8">
      <Banner banners={bannerData} />
      <Round banners={round} title={roundTitle} />
      <TopRest listOfRestaurants={listOfRestaurants} bodyTitle={bodyTitle} />
    </div>
  );
};

export default Body;
