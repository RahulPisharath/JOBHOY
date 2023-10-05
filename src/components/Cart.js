import React from "react";

const Cart = () => {
  return (
    <div className="container py-5 min_ht">
      <h2>Cart</h2>
      <div className="shopping-cart">
        <table className="table table-image">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-25">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                </svg>
              </td>
              <td>Vans Sk8-Hi MTE Shoes</td>
              <td>89$</td>
              <td className="qty">
                <input type="text" className="form-control wd_0" id="input1" value="2" />
              </td>
              <td>178$</td>
              <td>
                <a href="#" className="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="totals d-flex justify-content-end flex-column align-items-end text-end">
          <div className="totals-item d-flex py-1">
            <label>Subtotal</label>
            <div className="totals-value bold px-2" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div className="totals-item d-flex py-1">
            <label>Tax (5%)</label>
            <div className="totals-value bold px-2" id="cart-tax">
              3.60
            </div>
          </div>
          <div className="totals-item d-flex py-1">
            <label>Shipping</label>
            <div className="totals-value bold px-2" id="cart-shipping">
              15.00
            </div>
          </div>
          <div className="totals-item d-flex py-1 totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value bold px-2" id="cart-total">
              90.57
            </div>
           
          </div>
          <button className="btn btn_themed mt-5">Checkout</button>
        </div>

    
      </div>
    </div>
  );
};

export default Cart;
