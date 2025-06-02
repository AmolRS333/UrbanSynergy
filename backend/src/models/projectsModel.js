const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  projectCode: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  status: {
    type: String,
    enum: ["planning", "approved", "in_progress", "completed", "on_hold"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  budget: {
    type: Number,
  },
  isInterDepartmental: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Project", projectSchema);
