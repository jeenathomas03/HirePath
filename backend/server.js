const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/hirepath")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});