import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical" 
import "./Profile.css"
import { Type } from "./Type"


export default function Profile() {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-parent">
        <div className="profile-details">
            
          <div className="colz">
          <div className="colz-icon">
           {/* <Link to="#">
              <i className="fa fa-twitter-square"></i>
              </Link>
  */}
              <a href="https://www.linkedin.com/in/rahul-gupta-975420237/" target="_blank">
              <i className="fa fa-linkedin-square"></i>
              </a><a href="https://github.com/rahulgupta12032003"  target="_blank">
              <i className="fa fa-github-square"></i>
              </a>

          </div>
            
          </div>
          <div className="profile-name">
              <span className="primary-text">
                  {" "}
                  Hello, I'M <span className="highlighted-text">Rahul Gupta</span>
              </span>
          </div>

          <div className="profile-role">
              <span className="primary-text">
                  {" "}
                  <h1 style={{marginTop: "20px", marginBottom: "30px"}}>

                      <Type />

                  </h1>
                  <span className="profile-role-tagline">
                    
                  I am Passionate , work-oriented  & innovative Full Stack Web Developer. Loves solving problems and building projects  & committed to achieving organizational goals.
 
                  </span>
              </span>
          </div>
          <div className="profile-options">
            <a href="#contact">

              <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
              </button>
            </a>
              <a href="https://drive.google.com/file/d/19Dk5jaOVSP_uo851H3b4majs9CL1nxNc/view?usp=sharing" target="blank">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}

//A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
