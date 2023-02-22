// import React, { useState } from 'react';
import '../styles/aboutme.css'
import test from '../images/test.png'
import apollo from "../images/appollo.png"
import react from "../images/react.jpg"
import mongo from "../images/mongo.gif"
import java from "../images/java.jpg"
import node from "../images/node.png"
import sql from "../images/sql.jpg"
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
const AboutMe = ({setCurrentPage}) => {
    return (
       
        <div className="outer-card"><div class="card-outer">
       
        <div class="card-inner">
          
        <img src={test} alt="Your Image" className="profile-pic" />
          <div class="about-me">
            <h2 id='welcome'>Welcome</h2>
            <p>Hi my name is Connor Bottone. I am fascinated by technogloy and all of its advancments over the years. I love learing and problem solving and have been in web-development since Nov.2022. My introduction into web-develpoment began at the rutgers coding bootcamp and i am excited to continue on my journey and grow my knowledge within the tech feild.</p>
          <button id="portfolioBtn"onClick={() => setCurrentPage('Portfolio')}>P O R T F O L I O</button>
          </div>

        </div>
        
       

            </div>
            <div class="card-outer2">
              
              <img src={apollo} alt="Your Image" className="skills" />
              <img src={react} alt="Your Image" className="skills" />
              <img src={mongo} alt="Your Image" className="skills" />
              <img src={java} alt="Your Image" className="skills" />
              <img src={node} alt="Your Image" className="skills" />
              <img src={sql} alt="Your Image" className="skills" />
              <img src={bootstrap} alt="Your Image" className="skills" />
              <img src={git} alt="Your Image" className="skills" />
            </div>
            


        </div>
      
        
      )}
            

            export default AboutMe;