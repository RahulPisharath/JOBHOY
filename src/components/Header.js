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
          <Link className="navbar-brand nav-link text-white" to="/">
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
                 <a className="nav-link pointer" onClick={openLoginModal}>Login</a>
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
