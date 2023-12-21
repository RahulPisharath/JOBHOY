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
