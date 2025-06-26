const mongoose = require("mongoose");

const volunteerApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  dob: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  motivation: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("VolunteerApplication", volunteerApplicationSchema);
