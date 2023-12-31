// Banner component
import React from "react";
import BannerShimmer from "./BannerShimmer";
import { IMG_CDN_URL } from "../utils/constants.js";

const Banner = ({ banners }) => {
  // Limit the number of banners to 6
  const limitedBanners = banners.slice(0, 6);

  return (
    <div className="flex flex-row mt-5 items-center justify-center">
      {limitedBanners.length > 0 ? (
        limitedBanners.map((banner) => (
          <div className="banner-card cursor-pointer" key={banner.id}>
            <h2>{banner.header}</h2>
            <div className="h-full overflow-hidden object-cover">
              <img
                className="h-55 w-44"
                src={IMG_CDN_URL + banner.imageId}
                alt={banner.action.text}
              />
              <span className=" relative ml-12 font-bold text-center">
                {banner.action.text}
              </span>
            </div>
          </div>
        ))
      ) : (
        <BannerShimmer />
      )}
    </div>
  );
};

export default Banner;
