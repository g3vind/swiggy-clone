import React from "react";
import BannerShimmer from "../shimmers/BannerShimmer.js";
import { IMG_CDN_URL } from "../utils/constants.js";

const Banner = ({ banners }) => {
  const limitedBanners = banners?.slice(0, 3);

  return (
    <div className="flex flex-col m-20 mt-2 items-center ">
      <div className="flex mt-8">
        <span id="text" className="relative ml-4 mb-2 font-extrabold">
          Best offers for you
        </span>
      </div>

      <div className="flex">
        {limitedBanners?.length > 0 ? (
          limitedBanners.map((banner) => (
            <div
              className="banner-card flex-row cursor-pointer"
              key={banner?.id}
            >
              <div className="flex flex-col t-14 b-2 l-16 justify-center">
                <img
                  className="h-60 w-full rounded-2xl"
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
