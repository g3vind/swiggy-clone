import { SpinnerCircularFixed } from "spinners-react";
function BannerShimmer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="banner-shimmer banner-text text-center items-center justify-center text-xl pt-6">
        Looking for great food near you!
        <span>
          <SpinnerCircularFixed
            className="text-center items-center spinner"
            size={60}
            thickness={100}
            speed={100}
            color="black"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </span>
      </h2>
    </div>
  );
}

export default BannerShimmer;
