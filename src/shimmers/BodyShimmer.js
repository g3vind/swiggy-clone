import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

function BodyShimmer() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ShimmerSimpleGallery
            imageType="circular"
            imageHeight={200}
            caption
          />
        </div>
        <div>
          <ShimmerSimpleGallery card imageHeight={300} />
        </div>
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </div>
    </>
  );
}

export default BodyShimmer;
