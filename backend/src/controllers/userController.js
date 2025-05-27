const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const passport = require("passport"); 


const userSignup = async (req, res) => {
   try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
};

const userLogin = async (req, res,next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ message: "Logged in successfully", user: { id: user._id, email: user.email } });
    });
  })(req, res, next);
};

const userLogout = (req, res) => {
  // Handle logout logic here
  res.status(200).json({ message: "Logout successful" });
};

const getUserProfile = async (req, res) => {
  // const userId = req.user._id; // Assuming you have middleware to set req.user

  try {
    if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const { name, email, _id } = req.user;
  res.json({ name, email, id: _id });
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
