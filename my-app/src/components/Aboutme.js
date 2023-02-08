// import React, { useState } from 'react';
import '../styles/aboutme.css'
import test from '../images/test.png'
const AboutMe = ({setCurrentPage}) => {
    return (
       
        <div className="outer-card"><div class="card-outer">
        <div class="card-inner">
        <img src={test} alt="Your Image" className="profile-pic" />
          <div class="about-me">
            <h2>Welcome</h2>
            <p>Hi my name is Connor Bottone. I am fascinated by technogloy and all of its advancments over the years. I love learing and problem solving and have been in web-development since Nov.2022. My introduction into web-develpoment began at the rutgers coding bootcamp and i am excited to continue on my journey and grow my knowledge within the tech feild.</p>
          <button id="portfolioBtn"onClick={() => setCurrentPage('Portfolio')}>P O R T F O L I O</button>
          </div>

        </div>
      </div>
        </div>
      )}
            

            export default AboutMe;