import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState({
    job: "",
    location: "",
    experience: "",
  });

  const token = localStorage.getItem("token");

  // Fetch jobs from backend
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs");
    }
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.job.toLowerCase()) &&
      job.location.toLowerCase().includes(search.location.toLowerCase()) &&
      job.experience.toLowerCase().includes(search.experience.toLowerCase())
    );
    setJobs(filtered);
  };

  const sendInterest = (jobId) => {
    alert("Interest sent for job id: " + jobId);
  };

  return (
    <div className="home-page">
      <Navbar />

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

      {/* Job Cards */}
      <div className="job-container">
        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Experience:</strong> {job.experience}</p>

              <button onClick={() => sendInterest(job._id)}>
                Send Interest
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
