import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
const themes = {
  default: {
    background: "#000",
    textColor: "#00ff41",
    headingColor: "#00ff80",
    subheadingColor: "#00cc66",
    paragraphColor: "#00aa44",
  },
  dark: {
    background: "#f5f5f5",
    textColor: "#222",
    headingColor: "#000",
    subheadingColor: "#333",
    paragraphColor: "#555",
  },
  light: {
    background: "#1a1a1a",
    textColor: "#e0e0e0",
    headingColor: "#ffffff",
    subheadingColor: "#bbbbbb",
    paragraphColor: "#999999",
  },
  blue: {
    background: "#001f3f",
    textColor: "#87ceeb",
    headingColor: "#00aaff",
    subheadingColor: "#0099dd",
    paragraphColor: "#0077cc",
  },
  matrix: {
    background: "#000",
    textColor: "#00ff41",
    headingColor: "#00ff80",
    subheadingColor: "#00cc66",
    paragraphColor: "#00aa44",
  },
};

const About = () => {
  const [theme, setTheme] = useState("default");

  return (
    <div
      className="about-container"
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].textColor,
      }}
    >
      {/* Theme Selector */}
      <div className="theme-selector">
        {Object.keys(themes).map((key, index) => (
          <div
            key={index}
            className="theme-box"
            onClick={() => setTheme(key)}
            style={{ backgroundColor: themes[key].textColor }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="about-content">
        <img
          src="https://res.cloudinary.com/ddzua6arv/image/upload/v1743242369/uploads/uv9aanmiz09mb4ac31lr.jpg"
          alt="Khilesh Thakur"
          className="profile-img"
        />

        <div className="about-text">
          <h1 style={{ color: themes[theme].headingColor }}>Khilesh Thakur</h1>
          <h2
            className="subheading"
            style={{ color: themes[theme].subheadingColor }}
          >
            Developer. Designer. Innovator.
          </h2>
          <p style={{ color: themes[theme].paragraphColor }}>
            Building experiences that matter. Combining design and technology to
            create seamless digital solutions. Focused on speed, aesthetics, and
            innovation.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/developer" className="nav-link">
          Developer
        </Link>
        <Link to="/designer" className="nav-link">
          Designer
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Matrix Animation for Matrix Theme */}
      {theme === "matrix" && <div className="matrix-animation"></div>}
    </div>
  );
};

export default About;
