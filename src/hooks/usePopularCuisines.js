import { useEffect, useState } from "react";
import getData from "../utils/getData";
import { POPULAR_CUISINES } from "../utils/constants";
function usePopularCuisines() {
  const [popularCuisines, setPopularCuisines] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(POPULAR_CUISINES);

        setPopularCuisines(
          data?.data?.cards?.find(
            (item) => item?.card?.card?.imageGridCards?.info
          )?.card?.card?.imageGridCards?.info || []
        );
        setTitle(data?.data?.cards[1]?.card?.card?.header?.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return { popularCuisines, title };
}

export default usePopularCuisines;
