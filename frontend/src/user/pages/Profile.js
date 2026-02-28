import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/profile",
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Profile saved successfully!");
    } catch (error) {
      console.log(error);
      alert("Error saving profile");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="profile-page">
        <h2>Complete Your Profile</h2>

        <form onSubmit={handleSubmit} className="profile-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            disabled
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
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
            name="skills"
            placeholder="Skills (React, Node, Java)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience (Fresher / 2 years)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="education"
            placeholder="Education"
            onChange={handleChange}
          />

          <button type="submit">Save Profile</button>

        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;