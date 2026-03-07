import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterIndex.css";

function RecruiterIndex() {

  const navigate = useNavigate();

  return (
    <div className="recruiter-index">

      {/* Navbar */}

      <nav className="recruiter-navbar">

        <div className="logo">
          HirePath
        </div>

        <div className="nav-buttons">

          <button
          className="status-btn"
          onClick={() => navigate("/recruiter/status")}
          >
            Approval Status
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

        <h1>Welcome Recruiters</h1>

        <p>
          HirePath is a smart recruitment platform that helps companies
          connect with talented job seekers. Recruiters can register
          their company, post job openings, and manage applications
          efficiently.
        </p>

        <p>
          After registration, your company profile will be reviewed
          by our admin team. Once approved, you can start posting
          jobs and hiring candidates through your recruiter dashboard.
        </p>

        <button
        className="start-btn"
        onClick={() => navigate("/recruiter/register")}
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default RecruiterIndex;