import React from "react";
import { Gamepad2, PowerOff } from "lucide-react";
import offlineImage from "../images/Offline.png";

export default function Offline() {
  return (
    <div className="flex flex-col justify-center mb-60 mt-6 px-2 lg:flex-row lg:items-center">
      <div>
        <div>
          <h1 className="mt-3 text-3xl text-center font-semibold text-red-500 md:text-3xl">
            Connect to the Internet
          </h1>
          <p className="mt-4 text-2xl text-gray-500 text-center">
            You're offline. Check your connection.
          </p>
          <div className="grid place-items-center">
            {" "}
            <PowerOff size={40} className="" />
          </div>
          {/* <img
            src={offlineImage}
            alt="offline image"
            className="h-40 w-40 relative left-28 mt-4 justify-center items-center rounded-md object-cover"
          /> */}
          <div className="mt-6 flex items-center justify-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-black px-5 py-4 text-sm font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Gamepad2 size={25} /> &nbsp;
              <span className="text-xl"> Wanna Play a Game?</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:block"></div>
      </div>
    </div>
  );
}
