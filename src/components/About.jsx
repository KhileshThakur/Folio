import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const [filter, setFilter] = useState(""); // State for image filter

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div className="about-container">
      {/* Animated Circuit Background */}
      <div className="circuit-background"></div>

      {/* Main Content */}
      <div className="about-content">
        {/* Vertical Color Blocks for Image Filters */}
        <div className="filter-controls">
          <div className="color-block red" onClick={() => handleFilterChange("grayscale(100%)")}></div>
          <div className="color-block blue" onClick={() => handleFilterChange("sepia(100%)")}></div>
          <div className="color-block green" onClick={() => handleFilterChange("contrast(200%)")}></div>
          <div className="color-block purple" onClick={() => handleFilterChange("blur(3px)")}></div>
          <div className="color-block reset" onClick={() => handleFilterChange("")}></div>
        </div>

        {/* Profile Image */}
        <img
          src="https://res.cloudinary.com/ddzua6arv/image/upload/v1743242369/uploads/uv9aanmiz09mb4ac31lr.jpg"
          alt="Khilesh Thakur"
          className="profile-img"
          style={{ filter }} // Apply dynamic filter
        />

        {/* About Text */}
        <div className="about-text">
          <h1>Khilesh Thakur</h1>
          <h2 className="subheading">Developer. Designer. Innovator.</h2>
          <p>
            Building experiences that matter. Combining design and technology to create seamless digital solutions.
            Focused on speed, aesthetics, and innovation.
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
