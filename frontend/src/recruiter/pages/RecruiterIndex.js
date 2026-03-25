import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterIndex.css";

function RecruiterIndex() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-index">

      {/* Navbar */}
      <nav className="recruiter-navbar">
        <div className="logo">HirePath</div>

        <div className="nav-buttons">
          <button
            className="status-btn"
            onClick={() => navigate("/recruiter/status")}
          >
            Track Status
          </button>

          <button
            className="login-btn"
            onClick={() => navigate("/recruiter/login")}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/recruiter/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Hire Smarter with HirePath 🚀</h1>

        <p>
          A powerful platform designed for recruiters to connect with the best
          talent. Post jobs, manage applications, and streamline your hiring
          process — all in one place.
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/recruiter/register")}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose HirePath?</h2>

        <div className="features-container">
          <div className="feature-card">
            <h3>📄 Easy Job Posting</h3>
            <p>Create and manage job listings effortlessly.</p>
          </div>

          <div className="feature-card">
            <h3>👥 Manage Candidates</h3>
            <p>Track applications and shortlist candidates easily.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast Hiring</h3>
            <p>Speed up your hiring process with smart tools.</p>
          </div>
        </div>
      </div>

      {/* Approval Process Section */}
      <div className="process-section">
        <h2>Recruiter Approval Process</h2>

        <div className="process-container">
          <div className="process-step">
            <span>1</span>
            <h4>Register</h4>
            <p>Submit your company details.</p>
          </div>

          <div className="process-step">
            <span>2</span>
            <h4>Sent to Admin</h4>
            <p>Your request is sent for admin review.</p>
          </div>

          <div className="process-step">
            <span>3</span>
            <h4>Admin Viewed</h4>
            <p>Admin checks your company details.</p>
          </div>

          <div className="process-step">
            <span>4</span>
            <h4>Approved / Rejected</h4>
            <p>Get approval or feedback instantly.</p>
          </div>
        </div>

        <button
          className="track-btn"
          onClick={() => navigate("/recruiter/status")}
        >
          Track Your Status
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 HirePath. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default RecruiterIndex;