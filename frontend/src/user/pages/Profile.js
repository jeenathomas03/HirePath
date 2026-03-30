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

  const [resume, setResume] = useState(null);
  const [editField, setEditField] = useState(null);

  // Fetch Profile
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

  // Handle Change
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Auto add +91
    if (name === "phone") {
      if (value && !value.startsWith("+91")) {
        value = "+91" + value.replace(/^(\+91)/, "");
      }
    }

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Resume handler
  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  // Save Profile
  const handleSave = async () => {
    // ✅ Phone validation
    if (profile.phone) {
      const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

      if (!phoneRegex.test(profile.phone)) {
        alert(
          "Enter valid Indian phone number (10 digits, starts with 6-9, optional +91)"
        );
        return;
      }
    }

    // ✅ Required fields
    if (!profile.name || !profile.email) {
      alert("Name and Email are required");
      return;
    }

    try {
      const formData = new FormData();

      Object.keys(profile).forEach((key) => {
        formData.append(key, profile[key]);
      });

      if (resume) {
        formData.append("resume", resume);
      }

      await axios.post(
        "http://localhost:5000/api/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Profile updated!");
      setEditField(null);
    } catch (error) {
      console.log(error);
      alert("Error saving profile");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="profile-page">
        <div className="profile-container">

          {/* HEADER */}
          <div className="profile-header">
            <div>
              {editField === "name" ? (
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <h2>
                  {profile.name || "Your Name"}
                  <span
                    onClick={() => setEditField("name")}
                    className="edit-icon"
                  >
                    ✏️
                  </span>
                </h2>
              )}
              <p>{profile.email}</p>
            </div>
          </div>

          {/* BASIC DETAILS */}
          <div className="profile-card">
            <h3>Basic Details</h3>

            <div className="field">
              <label>Phone:</label>
              {editField === "phone" ? (
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="+91XXXXXXXXXX"
                  maxLength="13"
                />
              ) : (
                <span>
                  {profile.phone || "Not added"}
                  <span
                    onClick={() => setEditField("phone")}
                    className="edit-icon"
                  >
                    ✏️
                  </span>
                </span>
              )}
            </div>

            <div className="field">
              <label>Location:</label>
              {editField === "location" ? (
                <input
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              ) : (
                <span>
                  {profile.location || "Not added"}
                  <span
                    onClick={() => setEditField("location")}
                    className="edit-icon"
                  >
                    ✏️
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* SKILLS */}
          <div className="profile-card">
            <h3>Skills</h3>

            {editField === "skills" ? (
              <input
                name="skills"
                value={profile.skills}
                onChange={handleChange}
              />
            ) : (
              <div>
                <div className="skills-container">
                  {profile.skills
                    ? profile.skills.split(",").map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill.trim()}
                        </span>
                      ))
                    : "No skills added"}
                </div>
                <span
                  onClick={() => setEditField("skills")}
                  className="edit-icon"
                >
                  ✏️
                </span>
              </div>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="profile-card">
            <h3>Experience</h3>

            {editField === "experience" ? (
              <input
                name="experience"
                value={profile.experience}
                onChange={handleChange}
              />
            ) : (
              <p>
                {profile.experience || "Not added"}
                <span
                  onClick={() => setEditField("experience")}
                  className="edit-icon"
                >
                  ✏️
                </span>
              </p>
            )}
          </div>

          {/* EDUCATION */}
          <div className="profile-card">
            <h3>Education</h3>

            {editField === "education" ? (
              <input
                name="education"
                value={profile.education}
                onChange={handleChange}
              />
            ) : (
              <p>
                {profile.education || "Not added"}
                <span
                  onClick={() => setEditField("education")}
                  className="edit-icon"
                >
                  ✏️
                </span>
              </p>
            )}
          </div>

          {/* RESUME */}
          <div className="profile-card">
            <h3>Resume</h3>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            />

            {resume && <p>Selected: {resume.name}</p>}
          </div>

          {/* SAVE BUTTON */}
          <div className="save-btn-container">
            <button onClick={handleSave} className="save-btn">
              Save Changes
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;