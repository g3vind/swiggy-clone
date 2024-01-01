// Banner component
import React from "react";
import BannerShimmer from "../shimmers/BannerShimmer.js";
import { IMG_CDN_URL } from "../utils/constants.js";

const Banner = ({ banners, bannerTitle }) => {
  const limitedBanners = banners.slice(0, 7);

  return (
    <div className="flex flex-col m-20 mt-2 items-center ">
      <div className="flex mt-8">
        <span id="text" className="relative font-extrabold">
          {bannerTitle}
        </span>
      </div>
      <div className="flex">
        {limitedBanners.length > 0 ? (
          limitedBanners.map((banner) => (
            <div
              className="banner-card flex-row cursor-pointer"
              key={banner.id}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-auto w-full"
                  src={IMG_CDN_URL + banner.imageId}
                  alt={banner.action.text}
                />
                <span className="relative ml-1 font-bold items-center text-gray-500 text-center">
                  {banner.action.text}
                </span>
              </div>
            </div>
          ))
        ) : (
          <BannerShimmer />
        )}
      </div>
    </div>
  );
};

export default Banner;
