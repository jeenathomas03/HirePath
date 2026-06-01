import React from "react";
import { Link } from "react-router-dom";
import "./RecruiterNavbar.css";

function RecruiterNavbar() {
  return (
    <nav className="recruiter-navbar">

      <div className="logo">
        <h2>HirePath</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/recruiter/home">Home</Link>
        </li>

        <li>
          <Link to="/recruiter/post-job">Post Job</Link>
        </li>

        <li>
          <Link to="/recruiter/jobs">My Jobs</Link>
        </li>

        <li>
          <Link to="/recruiter/applications">Applications</Link>
        </li>

        <li>
          <Link to="/recruiter/profile">Profile</Link>
        </li>

        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>

    </nav>
  );
}

export default RecruiterNavbar;