import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCT_LIST_API } from "../../constants";
import data from '../products.json';
var dataItems = require('../products.json');

const Item = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ul className="list-group list-group-horizontal fx-wrap list_items">
        {data.map((product) => (
          <li key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <div className="item item_list text-center">
                <div className={`item_box py-2 card_animation ${product.category}`}>
                  <span className="icon icon_05"></span>
                  <h6 className="h6 text-white z-10">{product.title}</h6>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
