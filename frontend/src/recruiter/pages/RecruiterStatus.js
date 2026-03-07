import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecruiterStatus.css";

function RecruiterStatus() {

  const [status, setStatus] = useState("");
  const email = localStorage.getItem("recruiterEmail");

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/recruiter/status/${email}`
      );

      setStatus(res.data.status);

    } catch (error) {
      console.log("Error fetching status");
    }
  };

  return (
    <div className="status-container">

      <h2>Recruiter Approval Status</h2>

      {status === "pending" && (
        <p className="pending">
          Your registration is waiting for admin approval.
        </p>
      )}

      {status === "approved" && (
        <p className="approved">
          Congratulations! Your company is approved by admin.
        </p>
      )}

      {status === "rejected" && (
        <p className="rejected">
          Your registration was rejected. Contact support.
        </p>
      )}

    </div>
  );
}

export default RecruiterStatus;