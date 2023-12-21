import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const[otpStatus,setOtpStatus] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLocationModelOpen, setLocationModelOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userLocation, setUserLocation] = useState("Trivandrum");

  const sendOTP = async () => {
    setOtpStatus(true);
    try {
      const response = await axios.post("/api/send-otp", { phoneNumber });
      setVerificationId(response.data.verificationId); // Save the verification ID
      // Handle success - OTP sent
    } catch (error) {
      // Handle error
    }
  };

  const verifyOTP = async () => {
    setOtpStatus(false);
    try {
      await axios.post("/api/verify-otp", { verificationId, otp });
      // Handle success - User verified
    } catch (error) {
      // Handle error
    }
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setIsPhoneNumberValid(/^\d{10}$/.test(number));
    setPhoneNumber(number);
  };
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    console.log("Modal Opened!");
  };

  const openLocationModel = () => {
    setLocationModelOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setLocationModelOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="header-area header-fixed">
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-xl">
          <Link className="navbar-brand nav-link text-black" to="/">
            <img src="logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">
                <li>Home</li>
              </Link>
              <Link className="nav-link" to="/services">
                <li>Services</li>
              </Link>

              <Link className="nav-link" to="/shopping">
                <li>Shopping</li>
              </Link>

              <Link className="nav-link" to="/userprofile">
                <li> My Profile</li>
              </Link>
              <Link className="nav-link" to="/cart">
                <li className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  <span id="cart_iteems" className="cart_bubble">
                    {cartItems?.length}
                  </span>
                </li>
              </Link>
              <button
                className="btn btn-outline-secondary btn_themed"
                onClick={openLoginModal}
              >
                Login
              </button>

              <div className="dropdown ms-2">
                <button
                  className="btn btn-outline-secondary btn_themed_02"
                  type="button"
                  id="dropdownMenu2"
                  onClick={openLocationModel}
                >
                  <span className="icon_location">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="#FFF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.426 22.569L12 21.75l.573.82a1 1 0 01-1.147-.001z"
                        fill="#FFF"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.75a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                        fill="#FFF"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.426 22.569L12 21.75c.573.82.575.818.575.818l.002-.001.006-.004.02-.015.07-.05.257-.192a25.395 25.395 0 003.575-3.368c1.932-2.223 3.995-5.453 3.995-9.188a8.5 8.5 0 10-17 0c0 3.735 2.063 6.965 3.995 9.187a25.4 25.4 0 003.575 3.369 14.361 14.361 0 00.327.242l.02.015.006.004.003.002zM7.404 5.154A6.5 6.5 0 0118.5 9.75c0 3.015-1.687 5.785-3.505 7.875A23.403 23.403 0 0112 20.495a23.4 23.4 0 01-2.995-2.869C7.187 15.534 5.5 12.764 5.5 9.75a6.5 6.5 0 011.904-4.596z"
                        fill="#FFF"
                      ></path>
                    </svg>
                  </span>{" "}
                  {userLocation}
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && (
        <div className={`modal ${isLoginModalOpen ? "is-active" : ""}`}>
          <div className="modal-background" onClick={closeLoginModal}></div>
          <div className="modal-card">
            <form onSubmit={handleSubmit}>
              <h4 className="modal-card-title">Login/Sign Up</h4>

              <section className="modal-card-body">
           {!otpStatus && (
<>
           
                <div className="field mb-3 mt-3">
                  <div className="control">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Mobile Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>
                <button
                  disabled={!isPhoneNumberValid}
                  className="btn btn-outline-secondary btn_themed w-100"
                  onClick={sendOTP}
                >
                  Send OTP
                </button>
                </>
                )}
                {otpStatus && (
                  <>
                    <div className="field mb-3 mt-3">
                      <div className="control">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOTP(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn_themed w-100"
                      aria-label="close"
                      onClick={closeLoginModal}
                    >
                      Verify OTP
                    </button>
                  </>
                )}
              </section>
            </form>
          </div>
        </div>
      )}
      {isLocationModelOpen && (
        <div className={`modal ${isLocationModelOpen ? "is-active" : ""}`}>
          <div className="modal-background" onClick={closeLoginModal}></div>
          <div className="modal-card md">
            <form onSubmit={handleSubmit}>
              <h4 className="modal-card-title">
                Select Your Location To Continue
              </h4>

              <section className="modal-card-body">
                {/* Your login form fields */}
                <div className="field mb-3 mt-3">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-crosshair"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={userLocation}
                      onChange={(e) => {
                        setUserLocation(e.target.value);
                        console.log(userLocation);
                      }}
                      class="form-control"
                      placeholder="Search Your Location Here"
                      aria-label="Search Your Location Here"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="input-group themed flex-column my-3">
                  <h6 className="modal-card-title">
                    City not listed? Select Here
                  </h6>
                  <div>
                    <select
                      className="dropdown-select w-100"
                      placeholder=" Where to Look?"
                    >
                      <span>
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="#757575"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.426 22.569L12 21.75l.573.82a1 1 0 01-1.147-.001z"
                            fill="#757575"
                          ></path>
                          <path
                            clipRule="evenodd"
                            d="M12 5.75a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                            fill="#757575"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.426 22.569L12 21.75c.573.82.575.818.575.818l.002-.001.006-.004.02-.015.07-.05.257-.192a25.395 25.395 0 003.575-3.368c1.932-2.223 3.995-5.453 3.995-9.188a8.5 8.5 0 10-17 0c0 3.735 2.063 6.965 3.995 9.187a25.4 25.4 0 003.575 3.369 14.361 14.361 0 00.327.242l.02.015.006.004.003.002zM7.404 5.154A6.5 6.5 0 0118.5 9.75c0 3.015-1.687 5.785-3.505 7.875A23.403 23.403 0 0112 20.495a23.4 23.4 0 01-2.995-2.869C7.187 15.534 5.5 12.764 5.5 9.75a6.5 6.5 0 011.904-4.596z"
                            fill="#757575"
                          ></path>
                        </svg>
                      </span>
                      <option value="">Where to Look?</option>
                      <option value="Thiruvananthapuram">
                        Thiruvananthapuram
                      </option>
                      <option value="Kollam">Kollam</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Thrissur">Thrissur</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn_themed w-100"
                  aria-label="close"
                  onClick={closeLoginModal}
                >
                  Proceed
                </button>
              </section>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
