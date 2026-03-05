import React from "react";
import "./RecruiterHome.css";
import RecruiterNavbar from "../../components/RecruiterNavbar";

function RecruiterHome() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechNova", applicants: 12 },
    { id: 2, title: "Backend Developer", company: "CodeWorks", applicants: 8 },
    { id: 3, title: "UI/UX Designer", company: "DesignHub", applicants: 5 },
  ];

  return (
  
    <div className="recruiter-home">
      <header className="recruiter-header">
      <RecruiterNavbar/>
        <h1>Recruiter Dashboard</h1>
        <p>Manage jobs and track applicants easily</p>
      </header>

      { /* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>12</h2>
          <p>Total Jobs Posted</p>
        </div>
        <div className="stat-card">
          <h2>45</h2>
          <p>Total Applicants</p>
        </div>
        <div className="stat-card">
          <h2>5</h2>
          <p>Pending Approvals</p>
        </div>
      </div>

      {/* Job List */}
      <div className="job-section">
        <h2>Your Posted Jobs</h2>
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Applicants</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.applicants}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="actions">
        <button className="post-job-btn">Post New Job</button>
        <button className="manage-btn">Manage Applicants</button>
      </div>
    </div>
  );
}

export default RecruiterHome;