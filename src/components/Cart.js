import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // Calculate grand total
  // const grandTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  const grandTotal = cartItems.reduce(
    (total, item) => total + Number(item.quantity) * Number(item.price),
    0
  );
  console.log(grandTotal);
  return (
    <>
      <div className="min_ht">
        <div className="container-fluid pt-5 pb-2 bg_grey">
          <div className="container">
            <h4 className="mb-2 bold black text-uppercase">Cart</h4>
            <div className="row justify-content-between">
              <div className="col-12 col-md-7">
                <div className="bg-white p-4 mb-4 border">
                  <h4>Add a delivery address </h4>
                </div>
                <div className="bg-white p-4 border">
                  <h4>Payment Option</h4>
                  <div>
                    <div className="my-4">
                      <h6>UPI</h6>
                      <div className="d-flex align-items-center border">
                        <div
                          class="styles-v4_icon_3v8U5RPP"
                          data-testid="pm_upi_icon"
                          aria-hidden="true"
                        >
                          <img
                            crossOrigin="anonymous"
                            class="styles-v4_iconImg_25Y5Kzks"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/upicollect/bhim"
                          />
                        </div>
                        <div>
                          <div>98xxxxxxxx@upi</div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div className="my-4">
                      <h6>Credit & Debit Cards</h6>
                      <div className="d-flex align-items-center border p-3">
                        <div
                          class="styles-v4_icon_3v8U5RPP"
                          data-testid="pm_upi_icon"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            fill="currentColor"
                            className="bi bi-plus-square-dotted pe-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0zm2.292 0h-.917v1h.917zm1.833 0h-.917v1h.917zm1.833 0h-.916v1h.916zm1.834 0h-.917v1h.917zm1.833 0h-.917v1h.917zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0m2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917zm16 .917v-.917h-1v.917zM0 5.708v.917h1v-.917zm16 .917v-.917h-1v.917zM0 7.542v.916h1v-.916zm15 .916h1v-.916h-1zM0 9.375v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .916v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487M.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1zm-9.625 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zm1.834-1v1h.916v-1zm1.833 1h.917v-1h-.917zm1.833 0h.917v-1h-.917zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                          </svg>
                        </div>
                        <div>
                          <div>Add New Cards</div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div className="my-4">
                      <h6>More Payment OPtion</h6>
                      <div className="border p-3">
                        <div className="d-flex align-items-center border-bottom dotted py-2">
                          <div
                            class="styles-v4_icon_3v8U5RPP"
                            data-testid="pm_upi_icon"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              fill="currentColor"
                              class="bi bi-wallet2 pe-3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                            </svg>
                          </div>
                          <div>
                            <div>Wallets</div>
                          </div>
                          <div></div>
                        </div>
                        <div className="d-flex align-items-center border-bottom dotted py-2">
                          <div
                            class="styles-v4_icon_3v8U5RPP"
                            data-testid="pm_upi_icon"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              fill="currentColor"
                              class="bi bi-bank pe-3"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                            </svg>
                          </div>
                          <div>
                            <div>NetBanking</div>
                          </div>
                          <div></div>
                        </div>
                        <div className="d-flex align-items-center py-2">
                          <div
                            class="styles-v4_icon_3v8U5RPP"
                            data-testid="pm_upi_icon"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              fill="currentColor"
                              class="bi bi-cash pe-3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <div>Pay On Delivery</div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 bg-white p-4 border">
                <div class="col order">
                  {cartItems.length > 0 ? (
                    <div>
                      {cartItems.map((product, index) => (
                        <div
                          className="bg_grey text-black rounded p-2 my-2 d-flex justify-content-between align-middle"
                          key={index}
                        >
                          <h6 className="ft12">{product.title}</h6>
                          <h6 className="ft12">{product.price}</h6>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center">
                      No items in your cart. Visit{" "}
                      <a href="/home" className="bold text-info">
                        Home
                      </a>{" "}
                      Page to add items
                    </p>
                  )}

                  <div
                    role="button"
                    aria-label="Apply Coupon"
                    class="couponDiv"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-percent"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    Apply Coupon
                  </div>

                  <div className="d-flex py-1 border-bottom dotted mt-5">
                    <h6 className="bold "> Bill Details</h6>
                  </div>
                  <div className="d-flex py-3">
                    <span className="flexStart flex-grow-1">Item Total</span>
                    <span className="flexEnd">{grandTotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex py-1">
                    <span className="flexStart flex-grow-1">Item Discount</span>
                    <span className="flexEnd">-$ 278.00</span>
                  </div>
                  <div className="d-flex py-1">
                    <span className="flexStart flex-grow-1">Taxes and Fee</span>
                    <span className="flexEnd">$ 78.00</span>
                  </div>
                  <div className="d-flex py-3 border-bottom dotted">
                    <span className="flexStart flex-grow-1">
                      Total Amount to pay
                    </span>
                    <span className="flexEnd">$ 78.00</span>
                  </div>
                  <div className="d-flex py-3">
                    <span className="flexStart flex-grow-1"></span>
                    <span className="flexEnd bold">View Breakup</span>
                  </div>

                  <button class="btn btn-outline-secondary btn_themed w-100">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
