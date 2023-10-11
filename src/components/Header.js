import React, { useState } from 'react';
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    console.log("Modal Opened!");
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
           
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="input-group themed">
              <select className="dropdown-select icon_location" placeholder=" Where to Look?">
                <span>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#757575" xmlns="http://www.w3.org/2000/svg"><path d="M11.426 22.569L12 21.75l.573.82a1 1 0 01-1.147-.001z" fill="#757575"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.75a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" fill="#757575"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.426 22.569L12 21.75c.573.82.575.818.575.818l.002-.001.006-.004.02-.015.07-.05.257-.192a25.395 25.395 0 003.575-3.368c1.932-2.223 3.995-5.453 3.995-9.188a8.5 8.5 0 10-17 0c0 3.735 2.063 6.965 3.995 9.187a25.4 25.4 0 003.575 3.369 14.361 14.361 0 00.327.242l.02.015.006.004.003.002zM7.404 5.154A6.5 6.5 0 0118.5 9.75c0 3.015-1.687 5.785-3.505 7.875A23.403 23.403 0 0112 20.495a23.4 23.4 0 01-2.995-2.869C7.187 15.534 5.5 12.764 5.5 9.75a6.5 6.5 0 011.904-4.596z" fill="#757575"></path></svg>
                </span>
              <option value="">Where to Look?</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
              </select>
              </div>
              <div className="input-group themed mx-2">
              <input
                type="text"
                className="form-control w-430"
                aria-label="What are you Looking for?"
                placeholder="What are you Looking for?"
              />
              </div>
         
                {/* <Link className="nav-link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="nav-link" to="/about">
                  <li>Services</li>
                </Link>

                <Link className="nav-link" to="/shopping">
                  <li>Shopping</li>
                </Link>
                <Link className="nav-link" to="/cart">
                  <li>Cart</li>
                </Link>

                <Link className="nav-link" to="/userprofile">
                  <li> My Profile</li>
                </Link> */}
                <button className="btn btn-outline-secondary btn_themed" onClick={openLoginModal}>Login</button>
               
                {/* <button className="nav-link" onClick={openLoginModal}> Login </button>
                  */}
                
              </ul>
              
            </div>
          </div>
        </nav>
        {isLoginModalOpen && 
            <div className={`modal ${isLoginModalOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={closeLoginModal}></div>
            <div className="modal-card">
              <form onSubmit={handleSubmit}>
          
                  <h4 className="modal-card-title">Login/Sign Up</h4>
                  
            
                <section className="modal-card-body">
                  {/* Your login form fields */}
                  <div className="field mb-3 mt-3">
                  
                    <div className="control">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Mobile Number"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn_themed w-100"
                    aria-label="close"
                    onClick={closeLoginModal}>Proceed</button>
                </section>
       
              </form>
            </div>
          </div>
        }
    </div>
  );
};

export default Header;
