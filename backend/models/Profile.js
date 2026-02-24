const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullName: String,
  phone: String,
  location: String,
  skills: String,
  experience: String,
  education: String,
});

module.exports = mongoose.model("Profile", profileSchema);