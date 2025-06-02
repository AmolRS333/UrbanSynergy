const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  headId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assuming your users collection is called "User"
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
