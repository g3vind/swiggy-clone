import { useEffect, useState } from "react";
import { resList } from "../utils/mockData.js";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer.js";

const Body = () => {
  // state to store rest data
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  // state to store filtered data
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // use effect hook for calling func on each render
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data function
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestraunt(
        !json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
      );
      console.log(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // function to filter top-rated restaurants
  // const filterTopRated = () => {
  //   const filteredList = listOfRestaurants?.filter(
  //     (res) => res.info.availability.avgRating > 4
  //   );
  //   setFilteredRestaurant(filteredList);
  // };

  return (
    <div className="body">
      {/* TOP RATED BUTTON */}
      {/* <div className="filter-container">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div> */}
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
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
