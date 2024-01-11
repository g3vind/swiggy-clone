import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import UserContext from "./context/UserContext";

const Footer = lazy(() => import("./components/Footer"));
const Search = lazy(() => import("./pages/Search"));
const Offers = lazy(() => import("./pages/Offers"));
const SignIn = lazy(() => import("./pages/SignIn"));

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error";
import ResMenu from "./pages/ResMenu";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import Loader from "./shimmers/LoaderShimmer";
import { Provider } from "react-redux";
import store from "./store/store";
import CartPage from "./pages/CartPage";
import ThankYou from "./pages/ThankYou";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // an api call to get username and password
    const data = {
      name: "Govind",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
          <Suspense fallback={<Loader />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<Loader />}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Loader />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/thankyou",
        element: <ThankYou />,
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
