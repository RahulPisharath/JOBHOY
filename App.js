import "./src/assets/scss/index.scss";
// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Header from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
import Userprofile from "./src/components/Userprofile";
import Shopping from "./src/components/Shopping";
import DetailView from "./src/components/DetailView";

const AppLayout = () => {

  return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
};
//routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/userprofile",
        element: <Userprofile />,
      },
      {
        path: "/shopping",
        element: <Shopping />,
      },
      {
        path:"/detail/:id",
        element:<DetailView/>
      }
    ],
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
