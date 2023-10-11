import React from "react";

const Banner = () => {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 relative">
            <div className="bg_grey text-black rounded flex h-full items-center job_item_01">
              <div className="text-left p-4">
               
                  <h4>
                  Home services <br />
                     At your doorstep
                  </h4>
                  <p>Lorem ipsum dummy text <br/>lorem ipsum dummy</p>
                  <button className="btn btn-outline-secondary btn_themed_02">Shop Now</button>
                
              </div>
            </div>
            <div className="carousel_options">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="col-12 col-md-4 relative">
            <div className="bg_grey text-black rounded p-4">
              <h4>Discout upto 40% for Ecommerce</h4>
              <p>Lorem ipsum dummy text lorem ipsum dummy </p>
              <button className="btn btn-outline-secondary btn_themed_01">Shop Now</button>
            </div>
            <div className="carousel_options">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
