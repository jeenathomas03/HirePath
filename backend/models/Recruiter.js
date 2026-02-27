const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = mongoose.model("Recruiter", recruiterSchema);