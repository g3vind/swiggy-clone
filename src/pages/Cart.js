import React from "react";
import CartImage from "../images/Cart.png";

export default function Cart() {
  return (
    <section>
      <div className="grid place-content-center">
        <div className="">
          <img src={CartImage} className="p-14" />
        </div>
      </div>
    </section>
  );
}
