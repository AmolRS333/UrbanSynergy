const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/userModel");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  newUser
    .save()
    .then(() => {
      res.status(201).send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Internal Server Error");
    });
});

//! Routes to create: users for login, and in sidebar of output all

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
