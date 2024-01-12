import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import CartPage from "./CartPage";

export default function Cart() {
  // subscribing to store or cartSlice
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex flex-row justify-around items-center m-auto">
        {cartItems.length > 0 ? <CartPage items={cartItems} /> : <EmptyCart />}
      </div>
    </>
  );
}
