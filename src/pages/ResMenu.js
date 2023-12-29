import { useEffect } from "react";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
  // use effect to load data in every render
  useEffect(() => {
    fetchMenu();
  }, []);
  // async function to fetch data
  const fetchMenu = async () => {
    const response = await fetch(MENU_API);
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="res-menu">
      <h1>Name of the restaurant</h1>
      <img />
      <h2>Menu</h2>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  );
};
export default ResMenu;
