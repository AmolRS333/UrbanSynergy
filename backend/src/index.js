const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRoutes = require("./routes/userRoute");
const port = process.env.PORT || 3000;
const connectDB = require("./lib/db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
