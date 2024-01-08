import React from "react";
import EMPTYCART from "../images/EMPTYCART.png";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center mt-28 mb-72">
      <img src={EMPTYCART} className="w-72 h-full" />
      <h1 className="font-bold mt-5 text-gray-900 text-md">
        Your cart is empty
      </h1>
      <h2 className="mt-2 font-thin text-gray-400">
        You can go to home page to view more restaurants
      </h2>
      <Link to="/">
        <button className="bg-orange-500 text-white px-4 py-3 mt-4">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
