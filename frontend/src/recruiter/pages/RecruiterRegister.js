import React, { useState } from "react";
import "./RecruiterRegister.css";

function RecruiterRegister() {
  const [formData, setFormData] = useState({
    hrName: "",
    companyName: "",
    email: "",
    phone: "",
    companyRegNumber: "",
    website: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/recruiter/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          "Registration submitted. Waiting for admin approval."
        );

        setFormData({
          hrName: "",
          companyName: "",
          email: "",
          phone: "",
          companyRegNumber: "",
          website: "",
          address: "",
          password: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="recruiter-register-page">
      <div className="register-box">
        <h2>Recruiter Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="hrName"
            placeholder="HR Name"
            value={formData.hrName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="companyRegNumber"
            placeholder="Company Registration Number"
            value={formData.companyRegNumber}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="website"
            placeholder="Company Website"
            value={formData.website}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Company Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RecruiterRegister;