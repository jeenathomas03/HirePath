const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcryptjs");

// Register Recruiter
router.post("/register", async (req, res) => {
  try {
    const { name, company, email, password } = req.body;

    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ message: "Recruiter already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const recruiter = new Recruiter({
      name,
      company,
      email,
      password: hashedPassword,
    });

    await recruiter.save();

    res.json({ message: "Recruiter registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;