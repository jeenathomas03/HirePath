
import React from "react";
import "./JobPage.css";

function JobPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Bangalore",
      type: "Full-Time"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "InnovateX Pvt Ltd",
      location: "Hyderabad",
      type: "Full-Time"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Remote",
      type: "Remote"
    },
    {
      id: 4,
      title: "MERN Stack Developer",
      company: "NextGen Tech",
      location: "Kochi",
      type: "Full-Time"
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "Chennai",
      type: "Full-Time"
    }
  ];

  const applyJob = (jobTitle) => {
    alert(`You applied for ${jobTitle}`);
  };

  return (
    <div className="job-page">

      <h1 className="job-title">Available Jobs</h1>

      <div className="job-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>

            <button
              className="apply-btn"
              onClick={() => applyJob(job.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default JobPage;