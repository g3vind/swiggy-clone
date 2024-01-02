import { SpinnerCircularFixed } from "spinners-react";
function BannerShimmer() {
  return (
    <div
      className="flex flex-col -mt-16
     items-center justify-center"
    >
      <h2 className="banner-shimmer relative banner-text text-center bg-gray-900 text-gray-200 py-10 items-center justify-center text-xl mt-8">
        <span className="gird place-content-center">
          <SpinnerCircularFixed
            className="text-center items-center spinner"
            size={80}
            thickness={100}
            speed={100}
            color="white"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
          Looking for great food near you!
        </span>
      </h2>
    </div>
  );
}

export default BannerShimmer;
