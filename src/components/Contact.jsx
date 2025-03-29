import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaFileDownload,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messages, setMessages] = useState([
    "Welcome to Khilesh's Terminal.",
    "Enter your name:",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
  
    if (input.toLowerCase() === "cls") {
      resetTerminal();
      return;
    }
  
    let newMessages = [...messages, `> ${input}`];
    let newFormData = { ...formData };
  
    if (step === 1) {
      newFormData.name = input;
      newMessages.push("Enter your email:");
      setStep(2);
    } else if (step === 2) {
      newFormData.email = input;
      newMessages.push("Enter your message:");
      setStep(3);
    } else if (step === 3) {
      newFormData.message = input; // ✅ Message is now being stored correctly
      newMessages.push("✅ Sending message...");
  
      emailjs
        .send(
          "service_vp6u0na", // Your EmailJS Service ID
          "template_q6c980c", // Your EmailJS Template ID
          {
            to_email: "om25omthakur25@gmail.com",
            from_name: newFormData.name, // ✅ Using updated newFormData
            from_email: newFormData.email,
            message: `Name: ${newFormData.name}\nEmail: ${newFormData.email}\n\nMessage: ${newFormData.message}`, // ✅ Now correctly includes the message
          },
          "kKK0dozPAz12NR6FK" // Your EmailJS Public Key
        )
        .then(() => {
          newMessages.push("📩 Message sent successfully!");
          setMessages(newMessages);
  
          setTimeout(() => {
            alert("✅ Message Sent Successfully!");
            resetTerminal();
          }, 500);
        })
        .catch(() => {
          newMessages.push("❌ Failed to send the message. Try again.");
          setMessages(newMessages);
        });
  
      setStep(4);
    }
  
    setFormData(newFormData); // ✅ Ensure we update the state with the latest data
    setMessages(newMessages);
    setInput("");
  };
  

  const resetTerminal = () => {
    setStep(1);
    setFormData({ name: "", email: "", message: "" });
    setMessages(["Welcome to Khilesh's Terminal.", "Enter your name:"]);
    setInput("");
  };

  return (
    <div className="contact-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>
          CONNECT
          <br />
          TO ME
        </h2>
        <Link to="/about" className="menu-item">
          <FaHome size={28} className="menu-icon" />
          <span className="menu-label">Home</span>
        </Link>
        <Link to="/contact" className="menu-item">
          <FaEnvelope size={28} className="menu-icon" />
          <span className="menu-label">Contact</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="contact-main">
        {/* 🔗 Social Icons */}
        <div className="contact-icons">
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} className="icon linkedin" />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="icon github" />
          </a>
          <a
            href="https://leetcode.com/yourleetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode size={30} className="icon leetcode" />
          </a>
          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope size={30} className="icon gmail" />
          </a>
        </div>

        {/* 📄 Resume Download Button */}
        <a href="/resume.pdf" download className="resume-button">
          <FaFileDownload size={20} /> Download Resume
        </a>

        {/* 💻 Terminal Section */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <div className="terminal-body">
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
            {step < 4 && (
              <form onSubmit={handleSubmit} className="terminal-form">
                <span className="terminal-input-prefix">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="terminal-input"
                  placeholder="Type here..."
                  autoFocus
                />
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
