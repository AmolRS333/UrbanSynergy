const User = require("../models/userModel");
const express = require("express");

const userSignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

const userLogout = (req, res) => {
  // Handle logout logic here
  res.status(200).json({ message: "Logout successful" });
};

const getUserProfile = async (req, res) => {
  const userId = req.user._id; // Assuming you have middleware to set req.user

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

module.exports = {
  userSignup,
  userLogin,
  userLogout,
  getUserProfile,
};
