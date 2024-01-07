import { SpinnerCircularFixed } from "spinners-react";
function BannerShimmer() {
  return (
    <div
      className="flex flex-col -mt-16
     items-center justify-center"
    >
      <div className="banner-shimmer relative banner-text text-center bg-gray-900 text-gray-200 py-14 items-center justify-center text-xl -mt-4">
        <div className="flex flex-col justify-center">
          <SpinnerCircularFixed
            className="text-center items-center spinner mt-4"
            size={80}
            thickness={100}
            speed={100}
            color="white"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
          <span className="mt-8 text-2xl font-mono  ">
            Looking for great food near you...
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerShimmer;
