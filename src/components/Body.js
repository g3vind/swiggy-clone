import { useEffect, useState } from "react";
import { resList } from "../utils/mockData.js";
import ResCard from "./ResCard";

const Body = () => {
  // state to store rest data
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

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
      //   setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // function to filter top-rated restaurants
  const filterTopRated = () => {
    const filteredList = listOfRestaurants?.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  return (
    <div className="body">
      {/* TOP RATED BUTTON */}
      <div className="filter-container">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.length > 0 ? (
          (filteredRestaurant?.length > 0
            ? filteredRestaurant
            : listOfRestaurants
          ).map((restaurant) => (
            <ResCard key={restaurant.data.id} resData={restaurant} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Body;
