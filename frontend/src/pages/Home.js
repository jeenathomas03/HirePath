import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState({
    job: "",
    location: "",
    experience: ""
  });

  // Get logged-in user data
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    console.log("Search Data:", search);
  };

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">HirePath</h2>

        <div className="nav-right">
          <span>Welcome, {user?.name}</span>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Search Section */}
      <div className="search-section">
        <h1>Find Your Dream Job</h1>

        <div className="search-box">

          <input
            type="text"
            name="job"
            placeholder="Search Job"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
          />

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* User Data Section */}
      <div className="profile-section">
        <h2>Your Profile</h2>

        <div className="profile-card">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>
      </div>

    </div>
  );
}

export default Home;