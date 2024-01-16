import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage({ items }) {
  const dispatch = useDispatch();

  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  const handleIncreaseItem = (itemId) => {
    dispatch(increaseItem(itemId));
  };

  const handleRemoveItem = (itemIdToRemove) => {
    const itemToRemove = items.find(
      (item) => item?.card?.info?.id === itemIdToRemove
    );

    if (itemToRemove) {
      dispatch(removeItem(itemToRemove));
      toast.error(`${itemToRemove.card.info.name} removed from the cart!`, {
        position: "bottom-right",
      });
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared!", { position: "bottom-right" });
  };

  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) => total + (getItemPrice(item) + 30), // Adding delivery charge of ₹30 per item
      0
    );
  };

  const getItemPrice = (item) => {
    const price = item?.card?.info?.price
      ? item?.card?.info?.price / 100
      : item?.card?.info?.defaultPrice / 100;
    return price * item.quantity;
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
            className="rounded-lg bg-white lg:col-span-7"
          >
            <button
              onClick={() => handleClearCart()}
              className="bg-orange-500 text-white px-6 -mb-20 py-2 rounded-md"
              style={{ marginLeft: "32vw" }}
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
                        className="sm:h-22 sm:w-20 h-20 w-20 rounded-md object-cover"
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

                          <div className="flex flex-row mt-2 mb-2 ">
                            <p className="text-md font-medium text-gray-500 line-through ml-2">
                              ₹
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100 + 50
                                : item?.card?.info?.defaultPrice / 100 + 50}
                            </p>
                            <p className="text-md font-semibold text-gray-800 ml-2">
                              ₹
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100
                                : item?.card?.info?.defaultPrice / 100}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            onClick={() =>
                              handleDecreaseItem(item?.card?.info?.id)
                            }
                            type="button"
                            className="h-7 w-7 border-2 border-gray-400"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 border-2 border-gray-400 text-center"
                            value={item.quantity}
                          />
                          <button
                            onClick={() =>
                              handleIncreaseItem(item?.card?.info?.id)
                            }
                            type="button"
                            className="flex h-7 w-7 items-center justify-center border-2 border-gray-400"
                          >
                            +
                          </button>
                        </div>
                        <div class="ml-6 flex text-sm">
                          <button
                            onClick={() =>
                              handleRemoveItem(item?.card?.info?.id)
                            }
                            type="button"
                            class="flex items-center space-x-1 px-2 py-1 pl-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-red-500"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                            <span class="text-sm font-semibold text-red-500">
                              Remove
                            </span>
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
            style={{ width: "400px", padding: "16px" }}
            aria-labelledby="summary-heading"
            className="mt-12 rounded-lg lg:col-span-5 lg:mt-0 lg:p-0 bg-gray-200"
          >
            <h2
              id="summary-heading"
              className="border-b text-xl border-gray-200 py-3 text-center font-semibold text-gray-900 sm:p-6"
            >
              Order Summary
            </h2>
            <h2 className="text-md text-center -mt-4 mb-6 text-gray-800">
              Total Items ({items?.length})
            </h2>
            <div>
              <dl className="space-y-1 px-1 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col justify-center items-center w-full">
                    {items.map((item) => (
                      <div
                        key={item?.card?.info?.id}
                        className="flex flex-row items-center justify-evenly pt-2"
                      >
                        <div className="flex flex-row gap-28 items-center justify-between py-4">
                          <div>
                            <span className="text-md text-gray-800 flex-wrap font-bold">
                              {" "}
                              {item?.card?.info?.name}&nbsp;
                            </span>

                            <span className="text-black font-medium">
                              ({item?.quantity})
                            </span>
                          </div>
                          <span className="text-sm font-medium  mr-4 text-green-700">
                            ₹ {getItemPrice(item)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-dashed ">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium mr-8 text-green-700 ">
                    ₹ 30
                  </dd>
                </div>

                <div className="flex items-center justify-between border-y px-6  ">
                  <dt className="text-lg font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-lg font-medium mr-4 text-gray-900">
                    ₹ {calculateTotalPrice()}
                  </dd>
                </div>
              </dl>
              {/* <div className="px-2 pb-4 font-medium text-green-700">
        You will save ₹ 3,431 on this order
    </div> */}
              <Link to="/thankyou">
                <button
                  onClick={() => handleClearCart()}
                  type="button"
                  className="px-8 ml-24 py-3 rounded-lg mt-6 bg-green-500"
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
