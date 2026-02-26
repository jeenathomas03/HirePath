import React from "react";
import "./Index.css";
import logo from "../assets/hirepath-logo.png";

function Index() {
  return (
    <div className="index-container">

      {/* Navbar */}
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
          Discover opportunities, connect with recruiters, and build your
          professional career with ease.
        </p>

        <div className="hero-buttons">
          <a href="/reg" className="btn-primary">Get Started</a>
          <a href="/login" className="btn-secondary">Login</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div>
            <h2>10K+</h2>
            <p>Active Jobs</p>
          </div>
          <div>
            <h2>5K+</h2>
            <p>Companies</p>
          </div>
          <div>
            <h2>15K+</h2>
            <p>Job Seekers</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About HirePath</h2>
        <p>
          HirePath is a smart job portal designed for freshers and professionals.
          It helps candidates build resumes, apply for jobs, and track
          applications while enabling recruiters to hire the right talent.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Build Resume</h3>
          <p>Create professional resumes easily.</p>
        </div>

        <div className="feature">
          <h3>Apply for Jobs</h3>
          <p>Explore and apply for jobs instantly.</p>
        </div>

        <div className="feature">
          <h3>Track Applications</h3>
          <p>Monitor your job application status.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create Profile</h3>
            <p>Sign up and complete your profile.</p>
          </div>

          <div className="step">
            <h3>2. Apply Jobs</h3>
            <p>Find jobs matching your skills.</p>
          </div>

          <div className="step">
            <h3>3. Get Hired</h3>
            <p>Connect with recruiters and start working.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Job Categories</h2>
        <div className="category-list">
          <div className="category">Software Developer</div>
          <div className="category">UI/UX Designer</div>
          <div className="category">Data Analyst</div>
          <div className="category">Digital Marketing</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <p>Join thousands of job seekers finding opportunities on HirePath.</p>
        <br />
        <a href="/reg" className="btn-primary">Create Account</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-about">
            <h3>HirePath</h3>
            <p>Your smart job portal connecting job seekers and recruiters.</p>
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