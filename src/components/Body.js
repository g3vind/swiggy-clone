import { useEffect, useState } from "react";
import { resList } from "../utils/mockData.js";
import { API_CDN } from "../utils/constants.js";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer.js";
import Banner from "./Banner.js";

const Body = () => {
  // state to store rest data
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  // state to store searched rest data
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // state to store the entered text in search bar
  const [searchText, setSearchText] = useState("");

  // use effect hook for calling func on each render
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data function
  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();
      setListOfRestraunt(
        // optional chaining
        !json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      {/* ----------------------SEARCH INPUT-------------------------------*/}
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="search for dishes or restaurants"
          className="h-4 w-40"
        />
        {/* ---------------------SEARCH BUTTON--------------------------------*/}
        <button
          id="search-btn"
          onClick={() => {
            const searchedData = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchedData);
          }}
        >
          Search
        </button>
      </div>
      {/*-------------------- RESTAURANT LIST----------------------- */}
      <div className="res-container">
        {listOfRestaurants?.length > 0 ? (
          (filteredRestaurant?.length > 0
            ? filteredRestaurant
            : listOfRestaurants
          ).map((restaurant) => (
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
