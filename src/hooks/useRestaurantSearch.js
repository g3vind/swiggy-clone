import { useState, useEffect } from "react";

const useRestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchRestaurants = async () => {
      try {
        if (searchQuery.trim() === "") {
          setSearchResults([]);
          return;
        }

        setLoading(true);
        const latitude = 12.962163;
        const longitude = 79.1506201;

        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${latitude}&lng=${longitude}&str=${searchQuery}&trackingId=undefined&submitAction=STORED_SEARCH&queryUniqueId=7f803913-f492-5687-42fe-7eb0fdb47254&selectedPLTab=RESTAURANT`
        );

        const searchData = await response.json();

        setSearchResults(searchData);
        setError(null);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
        setError("Error fetching search results");
      } finally {
        setLoading(false);
      }
    };

    searchRestaurants();
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
  };
};

export default useRestaurantSearch;
