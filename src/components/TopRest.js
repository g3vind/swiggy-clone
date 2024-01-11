import ResCard from "./ResCard";
import ResCardShimmer from "../shimmers/ResCardShimmer";
import { Link } from "react-router-dom";
import ResCard, { WithOpenLabel } from "./ResCard";

function TopRest({ listOfRestaurants, bodyTitle }) {
  // HIGHER ORDER COMPONENT
  const ResCardOpen = WithOpenLabel(ResCard);
  return (
    <>
      <span id="txt" className="font-extrabold relative -mt-44 ml-32 mb-18">
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
    </>
  );
}

export default TopRest;
