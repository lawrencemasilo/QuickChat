import React from 'react'
import dev from '../../images/dev.jpg';
import { Element } from 'react-scroll';

const LandingPageAbout = () => {
  return (
    <>
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
    </>
  )
}


export default LandingPageAbout;