const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/userModel"); // adjust path

function initialize(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" }, // expects email in request
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false, { message: "User not found" });

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return done(null, false, { message: "Incorrect password" });

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Sessions (serialize/deserialize user)
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}

module.exports = initialize;
