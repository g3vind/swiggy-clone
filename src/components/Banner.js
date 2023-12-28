import { useState } from "react";

const Banner = ({}) => {
  // state to store banner data
  const [bannerData, setBannerData] = useState([]);
  // fetch data function
  const fetchData = async () => {
    try {
      const data = await fetch(API_CDN);
      const json = await data.json();
      // setBannerData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      console.log(json.data.cards[0].card.card.imageGridCards.info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div></div>
    </>
  );
};
export default Banner;
