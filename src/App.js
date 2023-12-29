import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";

const AppLayout = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Body />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
