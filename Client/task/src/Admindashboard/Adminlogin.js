import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/adminsign/adminlogin', { email, password })
      .then((res) => {
        if (res.data === 'valid') {
          navigate('/admindashboard');
        } else {
          alert('Invalid username or password');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-login">
      <section className="form-section">
        <div className="form-container">
          <h2 className="form-title">Admin Login</h2>
          <form onSubmit={submit} className="login-form">
            <div className="input-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-group">
              <input type="submit" value="Login" className="submit-button" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Adminlogin;
