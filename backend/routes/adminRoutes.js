const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


// ===============================
// 📌 HELPER: VALIDATE OBJECT ID
// ===============================
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);


// ===============================
// 📌 ADMIN LOGIN
// ===============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// ===============================
// 📌 GET PENDING RECRUITERS
// ===============================
router.get("/pending", async (req, res) => {
  try {
    const recruiters = await Recruiter.find({ status: "pending" })
      .sort({ createdAt: -1 });

    res.json(recruiters);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching pending recruiters" });
  }
});


// ===============================
// 📌 GET ALL RECRUITERS
// ===============================
router.get("/recruiters", async (req, res) => {
  try {
    const recruiters = await Recruiter.find()
      .sort({ createdAt: -1 });

    res.json(recruiters);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recruiters" });
  }
});


// ===============================
// 📌 UPDATE STATUS (COMMON FUNCTION)
// ===============================
const updateStatus = async (req, res, newStatus) => {
  try {
    const { id } = req.params;

    // ✅ Fix for your error
    if (!isValidId(id)) {
      return res.status(400).json({ message: "Invalid recruiter ID" });
    }

    const recruiter = await Recruiter.findByIdAndUpdate(
      id,
      { status: newStatus },
      { new: true }
    );

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.json({
      message: `Recruiter ${newStatus}`,
      recruiter,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating recruiter status" });
  }
};


// ===============================
// 📌 MARK AS VIEWED
// ===============================
router.put("/view/:id", (req, res) => {
  updateStatus(req, res, "viewed");
});


// ===============================
// 📌 APPROVE
// ===============================
router.put("/approve/:id", (req, res) => {
  updateStatus(req, res, "approved");
});


// ===============================
// 📌 REJECT
// ===============================
router.put("/reject/:id", (req, res) => {
  updateStatus(req, res, "rejected");
});


module.exports = router;