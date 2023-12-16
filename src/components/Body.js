import { useState } from "react";
import { resList } from "../utils/mockData.js"
import ResCard from "./ResCard"

const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);
    const [topRated, setTopRated] = useState([]);

    // function to filter top rated restaurants
    const filterTopRated = () => {
        const filteredList = restaurants.filter((res) => res.data.avgRating > 4);
        setTopRated(filteredList);
    };

    return (
        <div className="body">
            <div className="filter-container">
                <button className="filter-btn" onClick={filterTopRated}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {topRated.length > 0 ? (
                    topRated.map((restaurant) => (
                        <ResCard key={restaurant.data.id} resData={restaurant} />
                    ))
                ) : (
                    restaurants.map((restaurant) => (
                        <ResCard key={restaurant.data.id} resData={restaurant} />
                    ))
                )}
            </div>
        </div>
    );
};
export default Body;