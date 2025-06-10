const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const connectDB = require("./lib/db");
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./lib/passport-config");
const MongoStore = require("connect-mongo");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // if using cookies, else optional
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Session config
// const MongoStore = new connectMongo(session);
app.use(session({
  secret: "yourSecretKey",  // add ower secret key here
  resave: false,
  saveUninitialized: false,
  store:  MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: {
      httpOnly: true,
      secure: false, // set true only in production with HTTPS
      sameSite: "lax", // or 'none' if using cross-origin and HTTPS
    },// set to true in production with https
}));

// Initialize passport
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/auth/user", userRoutes);
app.get("/", (req, res) => {
  res.send("API is reachable1");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
