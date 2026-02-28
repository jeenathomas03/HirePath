const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  hrName: String,
  companyName: String,
  email: String,
  phone: String,
  companyRegNumber: String,
  website: String,
  address: String,
  password: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Recruiter", recruiterSchema);