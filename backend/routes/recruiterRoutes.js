const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcryptjs");


// ===============================
// 📌 REGISTER RECRUITER
// ===============================
router.post("/register", async (req, res) => {
  try {
    const { name, company, email, password } = req.body;

    // Check if already exists
    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ message: "Recruiter already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create recruiter with default status
    const newRecruiter = new Recruiter({
      name,
      company,
      email,
      password: hashedPassword,
      status: "pending",
    });

    await newRecruiter.save();

    res.status(201).json({
      message: "Registration successful. Waiting for admin approval.",
      recruiter: {
        id: newRecruiter._id,
        name: newRecruiter.name,
        email: newRecruiter.email,
        status: newRecruiter.status,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration" });
  }
});


// ===============================
// 📌 GET RECRUITER STATUS
// ===============================
router.get("/status/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);

    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.json({
      name: recruiter.name,
      company: recruiter.company,
      status: recruiter.status,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recruiter status" });
  }
});


// ===============================
// 📌 ADMIN - MARK AS VIEWED
// ===============================
router.put("/admin/view/:id", async (req, res) => {
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
// 📌 ADMIN - APPROVE
// ===============================
router.put("/admin/approve/:id", async (req, res) => {
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
// 📌 ADMIN - REJECT
// ===============================
router.put("/admin/reject/:id", async (req, res) => {
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


// ===============================
// 📌 GET ALL RECRUITERS (ADMIN)
// ===============================
router.get("/admin/all", async (req, res) => {
  try {
    const recruiters = await Recruiter.find().sort({ createdAt: -1 });

    res.json(recruiters);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recruiters" });
  }
});


module.exports = router;