import "./src/assets/scss/index.scss";
// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Header from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import Body from "./src/components/Body";
import Userprofile from "./src/components/Userprofile";
import Shopping from "./src/components/Shopping";
import DetailView from "./src/components/DetailView";
import appStore from "./src/components/utils/appStore";
import CartComponent from "./src/components/CartComponent";
import Services from "./src/components/Services";
import Userprofile from "./src/components/Userprofile";

const AppLayout = () => {

  return (
  <Provider store={appStore}>
    <Header />
      <Outlet />
      <Footer />
   </Provider>
      
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
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/cart",
        element: <CartComponent/>,
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
        path:"/detail/:category",
        element:<DetailView/>
      }
     
    ],
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
