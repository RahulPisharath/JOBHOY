import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    // If login is successful, you can redirect the user to their intended route
    // Example: history.push(location.state.from.pathname);
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <form onSubmit={handleSubmit}>
          <header className="modal-card-head">
            <p className="modal-card-title">Login</p>
            <button
              type="button"
              className="delete"
              aria-label="close"
              onClick={onClose}
            ></button>
          </header>
          <section className="modal-card-body">
            {/* Your login form fields */}
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
         
          </section>
 
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
