import { useEffect, useState } from "react";
import { API_CDN } from "../utils/constants.js";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer.js";
import Banner from "./Banner.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();
      setListOfRestaurants(
        !json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
      );
      console.log(json.data.cards[0]);
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

  return (
    <div className="body">
      <div className="search">
        <input
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
          className="h-4 w-40"
        />
      </div>
      <Banner />
      <div className="res-container">
        {listOfRestaurants?.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <ResCard key={restaurant.info.id} {...restaurant.info} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
