import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
  });

  const [editMode, setEditMode] = useState(false);

  // ✅ Fetch profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, [token]);

  // Handle change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Save profile
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

      alert("Profile updated!");
      setEditMode(false);
    } catch (error) {
      console.log(error);
      alert("Error saving profile");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="profile-page">
        <h2>My Profile</h2>

        {!editMode ? (
          // ✅ VIEW MODE
          <div className="profile-view">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
            <p><strong>Education:</strong> {profile.education}</p>

            <button onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </div>
        ) : (
          // ✅ EDIT MODE
          <form onSubmit={handleSubmit} className="profile-form">

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              disabled
            />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Location"
            />

            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="Skills"
            />

            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              placeholder="Experience"
            />

            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              placeholder="Education"
            />

            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>
              Cancel
            </button>

          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Profile;