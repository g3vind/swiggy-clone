import React from "react";

function RoundShimmer() {
  return (
    <div className="flex flex-row gap-12 p-4">
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-200"
      ></div>
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-300"
      ></div>
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-300"
      ></div>
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-300"
      ></div>
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-300"
      ></div>
      <div
        style={{ borderRadius: "50%" }}
        className="h-40 w-36 bg-gray-300"
      ></div>
    </div>
  );
}

export default RoundShimmer;
