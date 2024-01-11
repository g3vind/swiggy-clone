import { Trash } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.card.info.name} added to the cart!`, {
      position: "bottom-right",
    });
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    toast.error(`${item.card.info.name} removed from the cart!`, {
      position: "bottom-right",
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart);
    toast.info("Cart cleared!", { position: "bottom-right" });
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0 mb-60">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Orders
        </h1>

        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <button
              onClick={() => handleClearCart()}
              className="bg-orange-500 text-white px-6 -mb-20 py-2 rounded-md"
              style={{ marginLeft: "36vw" }}
            >
              Clear Cart
            </button>
            <ul role="list" className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item?.card?.info?.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={IMG_CDN_URL + item?.card?.info?.imageId}
                        className="sm:h-44 sm:w-40 -mt-12 h-28 w-20 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex gap-3 items-center">
                            <span className="h-5 w-5 mt-1">
                              {item?.card?.info?.isVeg === 1 ? (
                                <img src="https://img.icons8.com/?size=48&id=61083&format=png" />
                              ) : (
                                <img src="https://img.icons8.com/?size=48&id=61082&format=png" />
                              )}
                            </span>
                            <h3 className="text-md font-semibold">
                              {item?.card?.info?.name}
                            </h3>
                          </div>

                          <div className="flex flex-col mt-2 ">
                            <p className="text-md font-semibold text-gray-800 ml-2">
                              ₹
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100
                                : item?.card?.info?.defaultPrice / 100}
                            </p>
                            <p className="text-xs font-medium text-gray-500 line-through ml-2">
                              ₹{" "}
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100 + 50
                                : item?.card?.info?.defaultPrice / 100 + 50}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            onClick={() => handleRemoveItem(item)}
                            type="button"
                            className="h-7 w-7"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                            defaultValue={1}
                          />
                          <button
                            onClick={() => handleAddItem(item)}
                            type="button"
                            className="flex h-7 w-7 items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-12 rounded-sm lg:col-span-3 lg:mt-0 lg:p-0 bg-gray-200"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ 52,398
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ 48,967
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
              <Link to="/thankyou">
                <button
                  type="button"
                  className="px-16 ml-3 py-3 rounded-lg mt-6 bg-green-500"
                >
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </section>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
        />
      </div>
    </div>
  );
}
