const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware for sanitization and validation
const sanitizeAndValidate = [
  body("university").trim().escape(),
  body("institute").trim().escape(),
  body("department").trim().escape(),
  body("courseName").trim().escape(),
  body("courseCode").trim().escape(),
  body("semester").trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

app.post("/course", sanitizeAndValidate, (req, res) => {
  const {
    university,
    institute,
    department,
    courseName,
    courseCode,
    semester,
  } = req.body;
  const newCourse = {
    university,
    institute,
    department,
    courseName,
    courseCode,
    semester,
  };
  // Handle the course data (e.g., store it in a database)
  res.json({
    success: true,
    message: "Course details saved successfully.",
    course: newCourse,
  });
});

app.listen(4000, () => {
  console.log("Server started on port 3000");
});
