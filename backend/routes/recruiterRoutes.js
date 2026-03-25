const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


// ===============================
// 📌 HELPER: VALIDATE ID
// ===============================
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);


// ===============================
// 📌 REGISTER RECRUITER
// ===============================
router.post("/register", async (req, res) => {
  try {
    const { name, company, email, password } = req.body;

    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ message: "Recruiter already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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
    const { id } = req.params;

    // ✅ Fix your error here
    if (!isValidId(id)) {
      return res.status(400).json({ message: "Invalid recruiter ID" });
    }

    const recruiter = await Recruiter.findById(id);

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


module.exports = router;