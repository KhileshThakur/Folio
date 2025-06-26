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
  const [selectedProject, setSelectedProject] = useState(null);

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
          ME AS <br /> DEVELOPER
        </h2>

        {/* Home Icon */}
        <Link to="/about" className="menu-item">
          <FaHome size={28} className="menu-icon" />
          <span className="menu-label">Home</span>
        </Link>

        {/* Skill Menu */}
        <div
          className="menu-item"
          onClick={() => {
            setSubmenuOpen(!submenuOpen);
            setWorkOpen(false);
            setSelectedWorkCategory(null);
          }}
        >
          <PiNotebookBold size={30} className="menu-icon" />
          <span className="menu-label">Skills</span>
        </div>

        {/* Work Menu */}
        <div
          className="menu-item"
          onClick={() => {
            setWorkOpen(!workOpen);
            setSubmenuOpen(false);
            setSelectedSkillCategory(null);
          }}
        >
          <MdWork size={30} className="menu-icon" />
          <span className="menu-label">Work</span>
        </div>

        {/* Contact Icon */}
        <Link to="/contact" className="menu-item">
          <FaEnvelope size={28} className="menu-icon" />
          <span className="menu-label">Contact</span>
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
          <div className="skills-tags">
            {skillsData[selectedSkillCategory].map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ) : selectedWorkCategory ? (
          /* Work Section */
          <div className="projects-grid">
            {projectData[selectedWorkCategory].map((project, index) => (
              <div key={index} className="project-row">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-thumb"
                />
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <p>{project.techStack.join(", ")}</p>
                </div>
                <button
                  className="details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  More
                </button>
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

        {/* Selected Category Name */}
        <div className="selected-category">
          {selectedSkillCategory || selectedWorkCategory || "Select a Category"}
        </div>
        {selectedProject && (
          <div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-img"
              />
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <strong>Tech Stack:</strong>
              <p>{selectedProject.techStack.join(", ")}</p>
              <div className="project-links">
                <a href={selectedProject.url} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Developer;
