import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleProfileChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", user);
    // call API here
  };

  const changePassword = (e) => {
    e.preventDefault();
    console.log("Password Changed:", password);
    // call API here
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {/* Profile Section */}
      <div className="settings-card">
        <h3>Profile Information</h3>
        <form onSubmit={updateProfile}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleProfileChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleProfileChange}
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>

      {/* Change Password */}
      <div className="settings-card">
        <h3>Change Password</h3>
        <form onSubmit={changePassword}>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={password.currentPassword}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={password.newPassword}
            onChange={handlePasswordChange}
          />
          <button type="submit">Change Password</button>
        </form>
      </div>

      {/* Logout */}
      <div className="settings-card">
        <h3>Account</h3>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;