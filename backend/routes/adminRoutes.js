const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcryptjs");


// ===============================
// 📌 ADMIN LOGIN (SECURE)
// ===============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Compare hashed password
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
    const recruiters = await Recruiter.find({ status: "pending" }).sort({ createdAt: -1 });

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
    const recruiters = await Recruiter.find().sort({ createdAt: -1 });

    res.json(recruiters);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recruiters" });
  }
});


// ===============================
// 📌 MARK AS VIEWED
// ===============================
router.put("/view/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { status: "viewed" },
      { new: true }
    );

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.json({
      message: "Recruiter marked as viewed",
      recruiter,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating status" });
  }
});


// ===============================
// 📌 APPROVE RECRUITER
// ===============================
router.put("/approve/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.json({
      message: "Recruiter approved successfully",
      recruiter,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error approving recruiter" });
  }
});


// ===============================
// 📌 REJECT RECRUITER
// ===============================
router.put("/reject/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.json({
      message: "Recruiter rejected",
      recruiter,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error rejecting recruiter" });
  }
});


module.exports = router;