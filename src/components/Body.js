import { resList } from "../utils/mockData.js"
import ResCard from "./ResCard"
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <ResCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
export default Body;