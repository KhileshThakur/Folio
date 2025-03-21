import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const canvasRef = useRef(null);
  const letters = "PORTFOLIO".split("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letterRain = Array.from({ length: 100 }, () => ({
      char: letters[Math.floor(Math.random() * letters.length)],
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 6 + 3, // Faster falling speed
      fontSize: Math.random() * 20 + 10, // Smaller size
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(5, 146, 5, 0.4)"; // Lighter green effect
      ctx.font = "bold 12px monospace";

      letterRain.forEach((letter) => {
        ctx.font = `${letter.fontSize}px monospace`;
        ctx.fillText(letter.char, letter.x, letter.y);
        letter.y += letter.speed;

        if (letter.y > canvas.height) {
          letter.y = -20;
          letter.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, [letters]);

  return (
    <div className="home-container">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <h1 className="home-title">PORTFOLIO</h1>
      <h5 className="home-subtitle">Khilesh Thakur</h5>
      <Link to="/about" className="home-enter-btn">Enter</Link>
    </div>
  );
};

export default Home;
