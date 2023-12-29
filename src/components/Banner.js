// Banner component
import React from "react";
import BannerShimmer from "./BannerShimmer";
import { IMG_CDN_URL } from "../utils/constants.js";

const Banner = ({ banners }) => {
  // Limit the number of banners to 6
  const limitedBanners = banners.slice(0, 6);

  return (
    <div className="flex flex-row mt-10 items-center justify-center">
      {limitedBanners.length > 0 ? (
        limitedBanners.map((banner) => (
          <div className="banner-card cursor-pointer" key={banner.id}>
            <h2>{banner.header}</h2>
            <p>
              <img
                className="h-50 w-40"
                src={IMG_CDN_URL + banner.imageId}
                alt={banner.action.text}
              />
              <span className=" relative ml-12 font-bold text-center">
                {banner.action.text}
              </span>
            </p>
          </div>
        ))
      ) : (
        <BannerShimmer /> // Render BannerShimmer when there are no banners
      )}
    </div>
  );
};

export default Banner;
