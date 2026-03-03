import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    jobs: 0,
    applications: 0,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setStats(res.data);
    } catch (error) {
      console.log("Error loading dashboard data");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>{stats.users}</h2>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h2>{stats.jobs}</h2>
          <p>Total Jobs</p>
        </div>

        <div className="stat-card">
          <h2>{stats.applications}</h2>
          <p>Applications</p>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="admin-actions">
        <Link to="/admin-approve" className="action-card">
          Approve Jobs
        </Link>

        <Link to="/manage-users" className="action-card">
          Manage Users
        </Link>

        <Link to="/manage-jobs" className="action-card">
          Manage Jobs
        </Link>

        <Link to="/reports" className="action-card">
          Reports
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;