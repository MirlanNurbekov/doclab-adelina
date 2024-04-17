import React, { useState } from 'react';
import './styles/Page.css';
import SoledatImage from '../Assets/Soledat.jpeg';
import MarinaImage from '../Assets/Marina.jpeg';

function AboutUs() {
  const [isUlukbekOpen, setIsUlukbekOpen] = useState(false);
  const [isMarinaOpen, setIsMarinaOpen] = useState(false);

  return (
    <div className='abut-container'>
      <br/> <br/> <br/>
      <div className="about-section">
        <div className="profile-card">
          <div className="name-section">
            <hr />
            <h5>Ulukbek kyzy Soledat</h5>
            <p className="position">Junior Frontend Developer</p>
            <hr />
          </div>
          <img
            src={SoledatImage} 
            alt="Ulukbek kyzy Soledat"
            className="profile-pic"
            onClick={() => setIsUlukbekOpen(!isUlukbekOpen)}
          />
          {isUlukbekOpen && (
            <div className="speech-bubble speech-bubble-soledat">
              <p>Hi, I am Soledat - a junior frontend developer passionate about building responsive and accessible web applications. I specialize in React and have a keen interest in UX/UI design.</p>
            </div>
          )}
        </div>

        <div className="profile-card">
          <div className="name-section">
            <hr />
            <h5>Maksatova Marina</h5>
            <p className="position">Junior Backend Developer</p>
            <hr />
          </div>
          <img
            src={MarinaImage}
            alt="Maksatova Marina"
            className="profile-pic"
            onClick={() => setIsMarinaOpen(!isMarinaOpen)}
          />
          {isMarinaOpen && (
            <div className="speech-bubble speech-bubble-marina">
              <p>Hello, I'm Marina - junior backend developer with extensive experience in Node.js and database management. I love creating efficient, scalable back-end systems.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
