import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const Round = ({ banners, title }) => {
  const limitedBanners = banners?.slice(0, 6);

  return (
    <div className="flex flex-col m-24 p-10 -mt-10 items-center ">
      <span id="text" className="mb-6 mt-6 font-extrabold">
        {title}
      </span>

      <div className="flex">
        {limitedBanners?.length > 0 &&
          limitedBanners.map((banner) => (
            <div
              className="flex-row cursor-pointer ml-12 mr-12"
              key={banner?.id}
            >
              <div className="flex flex-col l-6 t-8 r-12 bg-white b-4 justify-center">
                <img
                  className="h-full w-full rounded-xl"
                  src={IMG_CDN_URL + banner.imageId}
                  alt={banner?.action?.text}
                />
              </div>
              <p className="text-gray-600 font-medium text-xl text-center">
                {banner?.action?.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Round;
