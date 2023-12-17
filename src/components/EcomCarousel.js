import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../products.json";
import { Link } from "react-router-dom";
const EcomCarousel = () => {
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
        <div
          className={`bg_grey text-black rounded flex h-slider-215 items-center job_item_${product.category}`}
          key={index}
        >
          <div className="text-left p-4 col-md-6">
            <h4>{product.title}</h4>
            <p className="text-truncate_2">{product.description}</p>
            <Link to={`/detail/${product.category}`}>
              <button className="btn btn-outline-secondary btn_themed_02">Shop Now</button>
            </Link>
            
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default EcomCarousel;
