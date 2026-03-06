import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminApprove.css";
import Navbar from "../../components/Navbar";

function AdminApprove() {
  const [pendingItems, setPendingItems] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPendingItems();
  }, []);

  const fetchPendingItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingItems(res.data);
    } catch (error) {
      console.log("Error fetching pending items");
    }
  };

  const approveItem = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/approve/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPendingItems(pendingItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Approval failed");
    }
  };

  const rejectItem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/reject/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPendingItems(pendingItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Rejection failed");
    }
  };

  return (
    <div className="admin-approve-container">
      <Navbar/>
      <h1>Admin Approval Panel</h1>

      {pendingItems.length === 0 ? (
        <p>No pending approvals</p>
      ) : (
        <div className="approval-list">
          {pendingItems.map((item) => (
            <div className="approval-card" key={item._id}>
              <h3>{item.title}</h3>
              <p><strong>Company:</strong> {item.company}</p>
              <p><strong>Location:</strong> {item.location}</p>

              <div className="approve-buttons">
                <button
                  className="approve-btn"
                  onClick={() => approveItem(item._id)}
                >
                  Approve
                </button>

                <button
                  className="reject-btn"
                  onClick={() => rejectItem(item._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminApprove;