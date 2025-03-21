import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Animated Circuit Background - Top 25% */}
      <div className="circuit-background"></div>

      {/* Main Content */}
      <div className="about-content">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="Khilesh Thakur"
          className="profile-img"
        />
        
        <div className="about-text">
          <h1>Khilesh Thakur</h1>
          <h2 className="subheading">Developer. Designer. Innovator.</h2>
          <p>
            Building experiences that matter. Combining design and technology to
            create seamless digital solutions. Focused on speed, aesthetics, and
            innovation.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/developer" className="nav-link">Developer</Link>
        <Link to="/designer" className="nav-link">Designer</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  );
};

export default About;
