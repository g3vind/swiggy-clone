import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { API_CDN } from "../utils/constants.js";
import ResCard, { WithOpenLabel } from "./ResCard";
import { Link } from "react-router-dom";
import ResCardShimmer from "../shimmers/ResCardShimmer.js";
import Banner from "./Banner.js";
import Offline from "../pages/Offline.js";
import Round from "./Round.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRestChain, setTopRestChain] = useState([]);
  const [round, setRound] = useState([]);
  const [roundTitle, setRoundTitle] = useState("");
  const [bannerData, setBannerData] = useState([]);
  const [bodyTitle, setBodyTitle] = useState("");
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftHandler = () => {
    const container = document.getElementById("restaurantContainer");
    if (container) {
      const newScrollLeft = scrollLeft - 200; // You can adjust the scroll amount
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setScrollLeft(newScrollLeft);
    }
  };

  // Function to handle scrolling to the right
  const scrollRightHandler = () => {
    const container = document.getElementById("restaurantContainer");
    if (container) {
      const newScrollLeft = scrollLeft + 200; // You can adjust the scroll amount
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setScrollLeft(newScrollLeft);
    }
  };

  // HIGHER ORDER COMPONENT
  const ResCardOpen = WithOpenLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setTopRestChain(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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

      <span id="txt" className="font-extrabold relative -mt-44 ml-40 mb-12">
        {bodyTitle}
      </span>

      <div className="ml-24">
        <div className="flex flex-wrap p-7">
          {listOfRestaurants?.length > 0 ? (
            listOfRestaurants.map((restaurant, index) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
                className={`mr-4 ${index % 5 === 4 ? "mb-6" : ""}`}
              >
                {restaurant?.info?.isNewlyOnboarded ? (
                  <ResCardOpen {...restaurant.info} />
                ) : (
                  <ResCard {...restaurant.info} />
                )}
              </Link>
            ))
          ) : (
            <ResCardShimmer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
