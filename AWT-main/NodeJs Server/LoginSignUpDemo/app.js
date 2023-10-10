const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("./Model/User");

const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(
  session({
    key: "_id",
    secret: "This is secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  })
);

var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies._id) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};

// routes
app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});
app
  .route("/login")
  .get(sessionChecker, (req, res) => {
    res.sendFile(__dirname + "/public/Login.html");
  })
  .post(async (req, res) => {
    var username = req.body.username,
      password = req.body.password;
    try {
      var user = await User.findOne({ username: username }).exec();
      if (!user) {
        res.redirect("/login");
        return; // Return to avoid further execution
      }

      user.comparePassword(password, (error, match) => {
        if (!match) {
          res.redirect("/login");
          return; // Return to avoid further execution
        }

        req.session.user = user; // Corrected line
        res.redirect("/dashboard");
      });
    } catch (error) {
      console.log(error);
      res.redirect("/login");
    }
  });
app
  .route("/signup")
  .get(sessionChecker, (req, res) => {
    res.sendFile(__dirname + "/public/Signup.html");
  })
  .post(async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      const doc = await user.save();
      req.session.user = doc; // Corrected line
      res.redirect("/dashboard");
    } catch (err) {
      console.error(err);
      res.redirect("/signup");
    }
  });

app.get("/dashboard", (req, res) => {
  if (req.session.user && req.cookies._id) {
    res.sendFile(__dirname + "/public/dashboard.html");
  } else {
    res.redirect("/login");
  }
});
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    } else {
      res.clearCookie("_id");
      res.redirect("/login");
    }
  });
});

app.listen(port, hostname, () => {
  console.log(`Login Demo Server running at http://${hostname}:${port}/`);
});
