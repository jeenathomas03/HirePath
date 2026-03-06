import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import logo from "../../assets/hirepath-logo.png";

function AdminNavbar() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">

      <div className="admin-logo" onClick={() => navigate("/admin/dashboard")}>
        <img src={logo} alt="HirePath Logo" />
        <span>HirePath Admin</span>
      </div>

      <ul className="admin-links">
        <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/admin/approve-recruiters")}>Approve Recruiters</li>
        <li onClick={() => navigate("/admin/manage-users")}>Manage Users</li>
        <li onClick={() => navigate("/admin/manage-jobs")}>Manage Jobs</li>
      </ul>

      <div className="admin-right">
        <span>Hi, {admin?.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>

    </nav>
  );
}

export default AdminNavbar;