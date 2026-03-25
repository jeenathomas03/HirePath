const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");
const Recruiter = require("../models/Recruiter");


// Admin Login
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
    res.status(500).json({ message: "Server error" });
  }
});


// Get Pending Recruiters
router.get("/pending", async (req, res) => {
  try {
    const pendingRecruiters = await Recruiter.find({ status: "pending" });

    res.json(pendingRecruiters);

  } catch (error) {
    res.status(500).json({ message: "Error fetching recruiters" });
  }
});


module.exports = router;