import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import Carouselitem  from "./Carouselitem";
import Banner from './Banner';
import Item from './Item';
import ad from '../assets/images/ad.jpg';
import ad2 from '../assets/images/ad2.jpg';

const Body = () => {
  return (
    <div className="theme_bg">
      <Banner/>
      <div className="container-fluid pt-5 pb-5 bg_grey">
        <div className="container">
          <h2 className="mb-2 bold black text-capitize">
            Most Used Services
          </h2>
          <Link to={'/detail/1'}>
          <Item/>
          </Link>
          
    
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 ">
        <div className="container">
           <div>
             <img src={ad} alt="Advertisment" className="w-full border-4"/>
           </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 bg_grey">
        <div className="container">      
          <div className="">
            <h2 className="mb-2 bold black text-capitilize">
              New Services
            </h2>
            <Item/>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5">
        <div className="container">
           <div>
             <img src={ad2} alt="Advertisment" className="w-full border-4"/>
           </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 bg_grey">
        <div className="container">      
          <div className="">
            <h2 className="mb-2 bold black text-capitilize">
              Featured Deals
            </h2>
            <Item/>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 bg-grey">
        <div className="container">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Body;
