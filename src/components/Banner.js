import React from "react";
import EcomCarousel from "./EcomCarousel";
import ShoppingCarousel from './ShoppingCarousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 relative test">
            <EcomCarousel/>
          {/* <div className="bg_grey text-black rounded flex h-full items-center job_item_01">
      <div className="text-left p-4">
        <h4>
          Home services <br />
          At your doorstep
        </h4>
        <p>
          Lorem ipsum dummy text <br />
          lorem ipsum dummy
        </p>
        <button className="btn btn-outline-secondary btn_themed_02">
          Shop Now
        </button>
      </div>
    </div>
    <div className="carousel_options">
      <span></span>
      <span></span>
      <span></span>
    </div> */}
          </div>
          <div className="col-12 col-md-4 relative test">
          <ShoppingCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
