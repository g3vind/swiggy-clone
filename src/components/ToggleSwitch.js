import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isVegOnly, setVegOnly] = useState(false);

  const handleToggle = () => {
    setVegOnly(!isVegOnly);
  };

  return (
    <div className="-ml-4">
      <label className="flex items-center space-x-2">
        <input
          type="button"
          className="form-checkbox h-4 w-4 text-blue-500"
          onClick={handleToggle}
        />
        <span
          className={`${
            isVegOnly ? "bg-green-500" : "bg-gray-300"
          } h-4 w-12 rounded-full transition-colors duration-300 ease-in-out`}
        >
          <span
            className={`${
              isVegOnly ? "transform translate-x-6" : ""
            } block h-full bg-white w-6 rounded-full shadow-md`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
