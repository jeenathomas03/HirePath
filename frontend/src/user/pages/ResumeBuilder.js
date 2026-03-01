import React, { useState } from "react";
import "./ResumeBuilder.css";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="resume-container">
      <h1>Resume Builder</h1>

      <div className="resume-content">
        {/* Form Section */}
        <div className="resume-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <textarea
            name="summary"
            placeholder="Professional Summary"
            onChange={handleChange}
          />

          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            onChange={handleChange}
          />

          <textarea
            name="education"
            placeholder="Education"
            onChange={handleChange}
          />

          <textarea
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
          />
        </div>

        {/* Preview Section */}
        <div className="resume-preview">
          <h2>{formData.name || "Your Name"}</h2>
          <p>{formData.email} | {formData.phone}</p>

          <h3>Summary</h3>
          <p>{formData.summary}</p>

          <h3>Skills</h3>
          <p>{formData.skills}</p>

          <h3>Education</h3>
          <p>{formData.education}</p>

          <h3>Experience</h3>
          <p>{formData.experience}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;