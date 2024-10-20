import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './Assests/logo.jpeg';

function Landingpage() {
  const [features, setFeatures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/feature');
        setFeatures(res.data);
      } catch (err) {
        console.error('Failed to fetch data', err);
        alert('Failed to load offers. Please try again.');
      }
    };
    fetchData();
  }, []);

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <header className="text-center py-5">
        <img src={logo} alt="DinAftale Logo" className="logo img-fluid mb-4" />
        <h1 className="display-4">Welcome to DinAftale</h1>
        <p className="lead">Your secure contract management solution</p>
      </header>

      <main>
        <section className="features py-5">
          <h2 className="text-center mb-4">Key Features</h2>
          <ul className="list-group list-group-flush">
            {features.map((feature, index) => (
              <li key={index} className="list-group-item">
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="cta py-5 text-center">
          <h2>Get Started</h2>
          <p className="lead">Streamline your contract process today!</p>
          <button className="btn btn-primary btn-lg" onClick={handleSignupClick}>
            Sign Up
          </button>
        </section>
      </main>

      <footer className="footer-container text-center">
        <p>© 2024 DinAftale. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landingpage;
