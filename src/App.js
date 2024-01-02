import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const Cart = lazy(() => import("./pages/Cart"));
const Footer = lazy(() => import("./components/Footer"));
const Search = lazy(() => import("./pages/Search"));
const Offers = lazy(() => import("./pages/Offers"));
const SignIn = lazy(() => import("./pages/SignIn"));
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error";
import ResMenu from "./pages/ResMenu";
import BannerShimmer from "./shimmers/BannerShimmer";
import Help from "./pages/Help";
import EmptyCart from "./components/EmptyCart";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<BannerShimmer />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<BannerShimmer />}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<BannerShimmer />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<BannerShimmer />}>
            <EmptyCart />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
