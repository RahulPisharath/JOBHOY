import React from "react";

const Banner = () => {
  return (
    <div className="banner-bg py-1 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white py-4 heading_banner text-center">
            Home services <br />At your doorstep
            </h2>
          </div>

          <div className="col-8 mx-auto head_option_bg mb-5">
         
            <div className="input-group transparent">
            <input
                type="text"
                className="form-control w-230"
                aria-label="What are you Looking for?"
                placeholder="What are you Looking for?"
              />
             
              <select className="btn btn-outline-secondary dropdown-select" placeholder=" Where to Look?">
              <option value="">Where to Look?</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
              </select>
       
              <button
                className="btn btn-outline-secondary btn_themed"
                type="button"
              >
                Search
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
