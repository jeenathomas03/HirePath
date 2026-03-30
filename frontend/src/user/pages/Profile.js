import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Profile.css";

function Profile() {
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

  // ✅ Fetch Profile
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

  // Handle input
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
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Profile updated successfully!");
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

        {!editMode ? (
          <div className="profile-container">

            {/* HEADER */}
            <div className="profile-header">
              <div>
                <h2>{profile.name || "Your Name"}</h2>
                <p>{profile.email || "email@example.com"}</p>
              </div>
              <button onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            </div>

            {/* BASIC DETAILS */}
            <div className="profile-card">
              <h3>Basic Details</h3>
              <p><strong>Phone:</strong> {profile.phone || "Not added"}</p>
              <p><strong>Location:</strong> {profile.location || "Not added"}</p>
            </div>

            {/* SKILLS */}
            <div className="profile-card">
              <h3>Skills</h3>
              <div className="skills-container">
                {profile.skills
                  ? profile.skills.split(",").map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))
                  : "No skills added"}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="profile-card">
              <h3>Experience</h3>
              <p>{profile.experience || "Not added"}</p>
            </div>

            {/* EDUCATION */}
            <div className="profile-card">
              <h3>Education</h3>
              <p>{profile.education || "Not added"}</p>
            </div>

          </div>
        ) : (
          // ✅ EDIT FORM
          <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>

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
              placeholder="Skills (comma separated)"
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

            <div className="form-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Profile;