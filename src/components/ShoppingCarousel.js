import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../products.json";
import { Link } from "react-router-dom";
const ShoppingCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={5000}
    >
      {data.map((product, index) => (
             <div className="bg_grey text-black rounded p-4">
             <h4>Discout upto 40% for Ecommerce</h4>
             <p>Lorem ipsum dummy text lorem ipsum dummy </p>
             <button className="btn btn-outline-secondary btn_themed_01">
               Shop Now
             </button>
           </div>
      ))}
    </Carousel>
  );
};

export default ShoppingCarousel