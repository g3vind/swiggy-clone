import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { API_CDN } from "../utils/constants";

const Banner = ({ id, imageId, text, altText }) => {
  // state to store banner data
  const [bannerData, setBannerData] = useState([]);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="banner-card cursor-pointer">
        <img
          className="h-45 w-40"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png"
        />
      </div>
      <div className="banner-card">
        <img
          className="h-45 w-40 cursor-pointer"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
        />
      </div>
      <div className="banner-card">
        <img
          className="h-45 w-40 cursor-pointer"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
        />
      </div>
      <div className="banner-card">
        <img
          className="h-45 w-40 cursor-pointer"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"
        />
      </div>
      <div className="banner-card">
        <img
          className="h-45 w-40 cursor-pointer"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
        />
      </div>
      <div className="banner-card">
        <img
          className="h-45 w-40 cursor-pointer"
          alt={altText}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png"
        />
      </div>
    </div>
  );
};
export default Banner;
