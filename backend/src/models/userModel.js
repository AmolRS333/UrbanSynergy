const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId, 
    // required: true,
    ref: "Department",
  },
  role: {
    type: String,
    enum: ["admin", "department_head", "officer", "technical_expert", "general_user"],
    // required: true,
  },
  designation: {
    type: String,
    // required: true,
  },
  profileImage: {
    type: String, 
    default: null,
  }
})

module.exports = mongoose.model("User", userSchema);
