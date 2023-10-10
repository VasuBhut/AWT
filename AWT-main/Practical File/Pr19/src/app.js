// src/app.js
const express = require("express");
const uploadRoute = require("./routes/upload.js");

const app = express();
const port = process.env.PORT || 7000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the upload route
app.use("/uploads", uploadRoute);

// Catch-all route for handling 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});