import React from "react";
import "./Index.css";
import logo from "../assets/hirepath-logo.png";

function Index() {
  return (
    <div className="index-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="HirePath Logo" className="logo-img" />
          <span className="logo-text">HirePath</span>
        </div>

        <div className="nav-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/reg" className="register-btn">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job with HirePath</h1>
        <p>
          HirePath connects talented job seekers with top companies.
          Build your resume, apply for jobs, and track your applications easily.
        </p>

        <div className="hero-buttons">
          <a href="/reg" className="btn-primary">Get Started</a>
          <a href="/login" className="btn-secondary">Login</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About HirePath</h2>
        <p>
          HirePath is a smart job portal platform designed to help freshers and
          experienced professionals find the right career opportunities.
          Recruiters can easily discover talented candidates and manage hiring.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Build Resume</h3>
          <p>Create professional resumes in minutes.</p>
        </div>

        <div className="feature">
          <h3>Apply for Jobs</h3>
          <p>Find jobs that match your skills and apply instantly.</p>
        </div>

        <div className="feature">
          <h3>Track Applications</h3>
          <p>Monitor your job applications and status updates.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <p>Join HirePath and discover opportunities that match your skills.</p>
        <a href="/reg" className="btn-primary">Create Free Account</a>
      </section>

      {/* Footer with Contact */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-about">
            <h3>HirePath</h3>
            <p>Your smart job portal to connect job seekers and recruiters.</p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@hirepath.com</p>
            <p>Phone: +91 9494949494</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 HirePath | Job Portal System
        </div>
      </footer>

    </div>
  );
}

export default Index;