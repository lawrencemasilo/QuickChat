import React from 'react'
import login from '../../videos/login.mp4';
import appdemo2 from '../../videos/appdemo2.mp4'
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


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

const LandingPageFeatures = () => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  )
}

export default LandingPageFeatures;