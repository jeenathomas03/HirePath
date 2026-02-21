import React from "react";
import "./Index.css";

function Index() {
  return (
    <div className="index-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">HirePath</div>

        <div className="nav-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/register" className="register-btn">Register</a>
        </div>
      </nav>

      {/* Website Details */}
      <section className="hero">
        <h1>Welcome to HirePath</h1>
        <p>
          HirePath is a smart job portal that helps job seekers find the
          right opportunities and recruiters discover talented candidates.
        </p>

        <div className="hero-buttons">
          <a href="/login" className="btn-primary">Get Started</a>
          <a href="/register" className="btn-secondary">Create Account</a>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Build Resume</h3>
          <p>Create professional resumes easily.</p>
        </div>

        <div className="feature">
          <h3>Apply for Jobs</h3>
          <p>Find and apply for jobs quickly.</p>
        </div>

        <div className="feature">
          <h3>Track Applications</h3>
          <p>Monitor your job application status.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 HirePath | Job Portal System</p>
      </footer>

    </div>
  );
}

export default Index;