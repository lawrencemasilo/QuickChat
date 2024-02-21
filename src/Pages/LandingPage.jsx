import hero1 from '../images/hero1.jpg';
import dev from '../images/dev.jpg';
import login from '../videos/login.mp4';
import appdemo2 from '../videos/appdemo2.mp4'
import '../App.css';
import '../LandingPage.css';
import { Link, Element } from 'react-scroll';
import github from '../images/github.svg'
import {useNavigate } from 'react-router-dom';

/*configures the layout of the videos displayed in the landing page*/
const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const videoStyle2 = {
  width: '100%',
  height: '100%',
  objectFit: 'fit',
};



function LandingPage() {
  /*Renders the entire landing page. If the landing page has any bug. It's most likely found here*/
  const navigate = useNavigate()
  return (
    <div className="landing-container">
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
      <Element name="section1" className="element">
        <div className="features-container">
          <div className="user-auth-feature-container">
            <div className="feature-desc-container">
              <h1 className="feature-desc-title">Your Security Is Our Priorty</h1>
              <p className="feature-desc">
                A simple and secure user authentication system,&nbsp;
                <span className="feature-desc-link" onClick={() => navigate("/login")}>try it out for yourself</span>
              </p>
            </div>
            <div className="feature-image-container">
              <video autoPlay loop controls style={videoStyle}>
                <source src={login} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="user-auth-feature-container">
            <div className="feature-image-container2">
              <video autoPlay loop controls style={videoStyle2}>
                <source src={appdemo2} type="video/mp4" />
              </video>
            </div>
            <div className="feature-desc-container2">
              <h1 className="feature-desc-title">Instant messaging...</h1>
              <p className="feature-desc">
                Send and receive messages in Real-Time,&nbsp;
                <span className="feature-desc-link" onClick={() => navigate("/login")}>try it out for yourself</span>
              </p>
            </div>
          </div>
        </div>
      </Element>
      <Element name="section2" className="element">
        <div className="about-us-container">
          <div className="team-container">
            <div className="team-title-container">
              <h2 className="team-title">Meet The Team</h2>
            </div>
            <div className="team-member-container">
              <div className="member-image-container">
                <img src={dev} alt="" className="member-image" />
              </div>
              <div className="member-info">
                <h3 className="member-name">Neo Masilo</h3>
                <p className="member-role">Full stack developer</p>
                <ul className="member-role-desc">
                  <li>Designed the UI/UX</li>
                  <li>Developed the front-end</li>
                  <li>Developed the back-end</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="desc-container">
            <h2 className="desc-title">QuickChat</h2>
            <p className="desc">
              I developed QuickChat as a demonstration of my skills in full-stack web development, 
              showcasing my ability to integrate technologies like Flask, 
              ReactJS, and Firebase to create real-time communication platforms. 
              It serves as a testament to my proficiency in building user-friendly and responsive web applications, 
              contributing to my portfolio and highlighting my capabilities to potential employers and collaborators.
            </p>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default LandingPage;