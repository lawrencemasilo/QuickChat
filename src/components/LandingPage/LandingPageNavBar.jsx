import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import github from '../../images/github.svg';

const LandingPageNavBar = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="navBar">
        <div className="landing-title-container">
          <h1 className="landing-title">QuickChat</h1>
        </div>
        <div className="links">
          <Link className="featureslink"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <h4>Features</h4>
          </Link>
          <Link className="AboutUs"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <h4>About</h4>
          </Link>
          <a href="https://github.com/lawrencemasilo/QuickChat" target="_blank" rel="noopener noreferrer" className="github">
            <img src={github} alt="" className="github-img"/>
          </a>
        </div>
        <div className="landing-button-container">
          <button onClick={() => navigate("/login")} className="landing-login-button">LOGIN</button>
          <button onClick={() => navigate("/signup")} className="landing-signup-button">SIGNUP</button>
        </div>
      </div>
    </>
  )
}

export default LandingPageNavBar;