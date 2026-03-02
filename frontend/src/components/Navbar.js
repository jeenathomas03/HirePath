import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/hirepath-logo.png";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-section" onClick={() => navigate("/home")}>
        <img src={logo} alt="HirePath Logo" className="logo-img" />
        <span className="logo-text">HirePath</span>
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/jobs")}>Jobs</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
        <li onClick={() => navigate("/resume-builder")}>Build Resume</li>
        <li onClick={() => navigate("/interview-prep")}>Interview</li>
        
      </ul>

      <div className="nav-right">
        <span className="user-name">Hi, {user?.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;