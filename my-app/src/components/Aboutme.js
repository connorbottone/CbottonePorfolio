// import React, { useState } from 'react';
import '../styles/aboutme.css'
import test from '../images/test.png'
const AboutMe = () => {
    return (
       
        <div className="outer-card"><div class="card-outer">
        <div class="card-inner">
        <img src={test} alt="Your Image" className="profile-pic" />
          <div class="about-me">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
        </div>
      )}
            

            export default AboutMe;