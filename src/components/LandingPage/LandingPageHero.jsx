import React from 'react';
import hero1 from '../../images/hero1.jpg';
import { useNavigate } from 'react-router-dom';

const LandingPageHero = () => {
    const navigate = useNavigate();
  return (
    <div className="hero">
        <div className="hero-image-container">
          <img src={hero1} alt="Hero image" className="hero-image"/>
        </div>
        <div className="call-to-action-container">
          <h1 className="hero-title">For a simple, <span className="hero-title2">Instant life...</span></h1>
          <div className="hero-button-container">
            <button onClick={() => navigate("/login")} className="hero-login-button">LOGIN</button>
          <button onClick={() => navigate("/signup")} className="hero-signup-button">TRY FOR FREE</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPageHero;