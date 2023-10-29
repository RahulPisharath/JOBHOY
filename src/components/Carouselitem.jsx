import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../products.json";

const Carouselitem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      console.log(products);
  });
  return (
<>

    <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    // className "owl-theme" is optional
    // <OwlCarousel className="owl-theme" items={6} loop margin={8} nav>   </OwlCarousel>
      <ul>
        {products.map((product) => {
          <li key={product.id}>
            <Link to={"/product/${product.id}"}></Link>
              <div className="item item_list text-center">
                <div className="item_box py-2 One card_animation">
                  <span className="icon icon_01"></span>
                  <h6 className="h6 black">{product.name}</h6>
                </div>
              </div>
            
          </li>;
        })}
      </ul>
    {/* /* <div className="item item_list text-center">
      <div className="item_box py-2 One card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Two card_animation">
        <span className="icon icon_02"></span>
        <h6 className="h6 black">Interior Work</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Four card_animation">
        <span className="icon icon_03"></span>
        <h6 className="h6 black">Electrician</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Three card_animation">
        <span className="icon icon_04"></span>
        <h6 className="h6 black">Gardening</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Five card_animation">
        <span className="icon icon_05"></span>
        <h6 className="h6 black">Furnitures</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 One card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Two card_animation">
        <span className="icon icon_02"></span>
        <h6 className="h6 black">Interior Work</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Three card_animation">
        <span className="icon icon_03"></span>
        <h6 className="h6 black">Electrician</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Four card_animation">
        <span className="icon icon_04"></span>
        <h6 className="h6 black">Gardening</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Five card_animation">
        <span className="icon icon_05"></span>
        <h6 className="h6 black">Plumber</h6>
      </div>
    </div>
    <div className="item item_list text-center One">
      <div className="item_box py-2 Six card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>  */}
    </>
  );
};

export default Carouselitem;
