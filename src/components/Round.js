import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const Round = ({ banners, title }) => {
  const limitedBanners = banners?.slice(0, 6);

  return (
    <div className="flex flex-col m-20 -mt-10 items-center ">
      <div className="flex mt-8">
        <span id="text" className="relative ml-4 mb-2 font-extrabold">
          {title}
        </span>
      </div>

      <div className="flex">
        {limitedBanners?.length > 0 &&
          limitedBanners.map((banner) => (
            <div
              className="flex-row cursor-pointer space-x-2 ml-12 mr-12"
              key={banner?.id}
            >
              <div className="flex flex-col l-8 t-8 r-12 bg-white b-4 justify-center">
                <img
                  className="h-30 w-full rounded-2xl"
                  src={IMG_CDN_URL + banner.imageId}
                  alt={banner?.action?.text}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Round;
