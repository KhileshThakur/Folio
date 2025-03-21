import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Developer.css";
import { skillsData } from "./data/SkillData";
import { projectData } from "./data/ProjectData";
import { FaEnvelope } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Developer = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(null);
  const [selectedWorkCategory, setSelectedWorkCategory] = useState(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".menu-item") &&
        !event.target.closest(".category-bar")
      ) {
        setSubmenuOpen(false);
        setWorkOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="developer-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>
          ME AS <br /> DESIGNER
        </h2>

        {/* Skill Menu */}
        <div className="menu-item">
          <PiNotebookBold
            size={30}
            className={`menu-icon ${submenuOpen ? "active" : ""}`}
            title="Skills"
            onClick={() => {
              setSubmenuOpen(!submenuOpen);
              setWorkOpen(false); // Close Work when opening Skills
              setSelectedWorkCategory(null); // Reset Work selection
            }}
          />
        </div>

        {/* Work Menu */}
        <div className="menu-item">
          <MdWork
            size={30}
            className={`menu-icon ${workOpen ? "active" : ""}`}
            title="Work"
            onClick={() => {
              setWorkOpen(!workOpen);
              setSubmenuOpen(false); // Close Skills when opening Work
              setSelectedSkillCategory(null); // Reset Skills selection
            }}
          />
        </div>

        {/* Home Icon */}
        <Link to="/about" className="home-icon">
          <FaHome size={28} />
        </Link>

        {/* Contact Icon */}
        <Link to="/contact" className="contact-icon">
          <FaEnvelope size={28} />
        </Link>
      </aside>

      {/* Skill Category Menu */}
      {submenuOpen && (
        <div className="category-bar">
          {Object.keys(skillsData).map((category) => (
            <div
              key={category}
              className={`category-btn ${
                selectedSkillCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedSkillCategory(category);
                setSelectedWorkCategory(null); // Clear work category if selecting skills
              }}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      {/* Work Category Menu */}
      {workOpen && (
        <div className="category-bar">
          {Object.keys(projectData).map((category) => (
            <div
              key={category}
              className={`category-btn ${
                selectedWorkCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedWorkCategory(category);
                setSelectedSkillCategory(null); // Clear skills category if selecting work
              }}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Skills Section */}
        {selectedSkillCategory && !selectedWorkCategory ? (
          <div className="skills-display">
            {skillsData[selectedSkillCategory].map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        ) : selectedWorkCategory ? (
          /* Work Section */
          <div className="projects-display">
            {projectData[selectedWorkCategory].map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="tech-stack">
                  {project.techStack.join(", ")}
                </span>
                <div className="project-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img
            src="https://camo.githubusercontent.com/87af9a9fec730c94fc8b08eb21fa5ef6ab7831a67ba17bf8cc76696f6e4be1ef/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966"
            alt="Cartoon Coding"
            className="cartoon-img"
          />
        )}
      </main>

      {/* Selected Category Name */}
      <div className="selected-category">
        {selectedSkillCategory || selectedWorkCategory || "Select a Category"}
      </div>
    </div>
  );
};

export default Developer;
