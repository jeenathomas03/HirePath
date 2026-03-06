import React, { useState } from "react";
import RecruiterNavbar from "../../components/RecruiterNavbar";
import "./PostJob.css";

function PostJob() {

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(job); // later send to backend API

    alert("Job Posted Successfully!");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: ""
    });
  };

  return (
    <>
      <RecruiterNavbar />

      <div className="postjob-container">

        <h2>Post a New Job</h2>

        <form onSubmit={handleSubmit} className="postjob-form">

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={job.company}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Post Job</button>

        </form>

      </div>
      <Footer />
    </>
  );
}

export default PostJob;