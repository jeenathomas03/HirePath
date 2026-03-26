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
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hire Smarter with HirePath 🚀</h1>

          <p>
            Connect with top talent, manage candidates efficiently, and
            accelerate your hiring process with our smart recruitment platform.
          </p>

          <div className="hero-buttons">
            <button
              className="start-btn"
              onClick={() => navigate("/recruiter/register")}
            >
              Get Started
            </button>

            <button
              className="outline-btn"
              onClick={() => navigate("/recruiter/status")}
            >
              Track Status
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose HirePath?</h2>

        <div className="features-container">
          <div className="feature-card">
            <h3>📄 Easy Job Posting</h3>
            <p>Create and manage job listings effortlessly.</p>
          </div>

          <div className="feature-card">
            <h3>👥 Smart Candidate Tracking</h3>
            <p>Shortlist and manage applicants with ease.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Faster Hiring</h3>
            <p>Speed up your hiring workflow with automation.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>Recruiter Approval Process</h2>

        <div className="process-container">
          <div className="process-step">
            <span>1</span>
            <h4>Register</h4>
            <p>Submit company details</p>
          </div>

          <div className="process-step">
            <span>2</span>
            <h4>Sent to Admin</h4>
            <p>Request sent for review</p>
          </div>

          <div className="process-step">
            <span>3</span>
            <h4>Admin Viewed</h4>
            <p>Details are verified</p>
          </div>

          <div className="process-step">
            <span>4</span>
            <h4>Approved / Rejected</h4>
            <p>Final decision shared</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Hiring Today</h2>
        <p>Join HirePath and simplify your recruitment process.</p>

        <button
          className="cta-btn"
          onClick={() => navigate("/recruiter/register")}
        >
          Create Recruiter Account
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 HirePath. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default RecruiterIndex;