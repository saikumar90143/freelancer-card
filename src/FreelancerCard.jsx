import React from "react";
import './Freelancer.css'
import LOGO from "./assets/dsk.png";
import { FaStar, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
export default function FreelancerCard() {
  return (
    <div className="freelancer-card">
      {/* logo */}
      <div className="logo">
        <img src={LOGO} alt='logo'/>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
          <p>4.5</p>
        </div>
      </div>
      {/* info */}
      <div className="info">
        {/* personal details */}
        <div className="personal-details">
          <h5>D.SAI KUMAR</h5>
          <p>Front-End Developer</p>
          {/* social media */}
          <div className="social-media">
            {/* website */}
            <div className="website">
              <FaGlobe />
              <a
                href="https://www.saikumar-dev.onrender.com"
                
              >
                Saikumar-portfolio
              </a>
            </div>
            <div className="social-icons">
              <FaLinkedin />
              <BiLogoGmail />
              <FaInstagram />
            </div>
          </div>
        </div>
        <hr/>
        {/* completion */}
        <div className="completion">
          <div className="jobs">
            <h4>2</h4>
            <p>Jobs Comleted</p>
          </div>
          <div className="ontime">
            <h4>89%</h4>
            <p>On Time</p>
          </div>
        </div>
        <hr/>
        {/* description */}
        <div className="desc">
          <p>
            Iam well trained MERN-STACK DEVELOPER. I had built multiple projects
            using various technologies like html, css, javascript, react and
            some other frameworks. I also had Basic knowledge on DSA aswell.
          </p>
        </div>
        {/* buttons */}
        <div className="hire">
            <button>Hire Me</button>
            <button>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}
