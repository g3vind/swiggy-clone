import { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { API_CDN } from "../utils/constants.js";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import ResCardShimmer from "../shimmers/ResCardShimmer.js";
import Banner from "./Banner.js";
import Offline from "../pages/Offline.js";
import HR from "./HR.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
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
      // console.log(json.data.cards);
      console.log(bannerData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // function to handle search text
  const handleSearch = (text) => {
    const searchedData = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    return searchedData;
  };

  if (onlineStatus === false) {
    return (
      <>
        <Offline />
      </>
    );
  }

  return (
    <div className="body">
      <div className="search">
        {/* <input
          value={searchText}
          onChange={(e) => {
            const text = e.target.value;
            setSearchText(text);

            if (text.trim() === "") {
              // If search text is empty, revert to the original data
              fetchData();
            } else {
              // Otherwise, perform the search
              const searchedData = handleSearch(text);
              setListOfRestaurants(searchedData);
            }
          }}
          type="text"
          placeholder="Search for restaurants, dishes and food"
          className="h-4 w-40 mt-2"
        /> */}
      </div>

      {/* ------------------BANNER COMPONENT----------------------------- */}
      <Banner banners={bannerData} bannerTitle={bannerTitle} />

      {/* RES CARDS TITLE */}
      <span id="txt" className="font-extrabold -mt-12 ml-32">
        {bodyTitle}
      </span>
      {/*----------------------- RES CARDS ----------------------------------*/}
      <div className="flex flex-wrap flex-col ml-28 justify-center">
        <div></div>
        <div className="flex flex-wrap">
          {/* row di */}
          <div className="flex-row">
            <div className="flex overflow-x-auto">
              {listOfRestaurants?.length > 0 ? (
                listOfRestaurants.map((restaurant) => (
                  <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                    className="mr-4 mb-4"
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
