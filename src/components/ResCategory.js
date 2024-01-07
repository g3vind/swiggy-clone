// single accordion item to map over the categories
import { ChevronUp, ChevronDown } from "lucide-react";
import ThickRollar from "./ThickRollar";
import CategoryItems from "./CategoryItems";
import { useState } from "react";
const ResCategory = ({ data }) => {
  // state for showing items
  const [showItems, setShowItems] = useState(true);
  // function for handling the click of accordion header
  function handleClick() {
    setShowItems(!showItems);
  }
  return (
    <div className="ml-7 mr-7">
      {/* Accordion Header */}
      <div className=" mt-4 mb-4 w-full bg-none shadow-lg p-6">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {" "}
          <span className="font-extrabold text-lg">
            {data?.title} &nbsp;({data?.itemCards?.length})
          </span>
          <span>{showItems ? <ChevronUp /> : <ChevronDown />}</span>
        </div>
        {/* Accordion Body */}
        {/* showing and hiding this category items when the header is clicked */}
        {showItems && <CategoryItems items={data?.itemCards} />}
      </div>

      <ThickRollar />
    </div>
  );
};
export default ResCategory;
