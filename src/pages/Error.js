"use client";

import React, { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link, useRouteError } from "react-router-dom";

export function Error() {
  // hook to catch error
  const error = useRouteError();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(error);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto w-full max-w-8xl px-20 md:px-4">
      <div className="my-16 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4279234-3569464.png?f=webp"
            alt="question-mark"
            className="h-[400px] w-auto"
          />
          <div>
            <p className="mt-6 text-lg font-bold text-red-700">
              {error.status}:{error.statusText}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-gray-800 md:text-3xl">
              {error.data}
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <Link
                to="/"
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </Link>
              <Link
                to="/contact"
                type="button"
                className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
