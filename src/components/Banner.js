import React from "react";
import BannerShimmer from "../shimmers/BannerShimmer.js";
import { IMG_CDN_URL } from "../utils/constants.js";

const Banner = ({ banners }) => {
  const limitedBanners = banners?.slice(0, 8);

  return (
    <div className="flex flex-col m-22 -mt-2 items-center ">
      <div className="flex">
        <span id="text" className="relative -ml-12 mb-2 font-extrabold">
          What's on your mind?
        </span>
      </div>

      <div className="flex border-b-2 border-gray-300 mb-12 mt-3">
        {limitedBanners?.length > 0 ? (
          limitedBanners.map((banner) => (
            <div
              className="banner-card flex-row cursor-pointer"
              key={banner?.id}
            >
              <div className="flex flex-col t-14 b-2 l-16 justify-center">
                <img
                  className="h-40 w-full rounded-full"
                  src={IMG_CDN_URL + banner.imageId}
                  alt={banner?.action?.text}
                />
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
