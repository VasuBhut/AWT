const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Nodemailer with your email service provider's SMTP details
const transporter = nodemailer.createTransport({
  //   service: "YourEmailService", // Example: 'Gmail'
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAILER,
    pass: process.env.EMAILPASS,
  },
});

// Serve a simple HTML form for email subscription
app.get("/", (req, res) => {
  res.send(`
    <h1>Email Subscription</h1>
    <form method="POST" action="/subscribe">
      <label>Email:</label>
      <input type="email" name="email" required>
      <button type="submit">Subscribe</button>
    </form>
  `);
});

// Handle POST request to subscribe
app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  // Create email message
  const mailOptions = {
    from: process.env.MAILER,
    to: email,
    subject: "Welcome to Our Newsletter",
    text: "Thank you for subscribing to our newsletter!",
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Subscription failed. Please try again later.");
    } else {
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .send("Subscription successful! Check your email for confirmation.");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and host link is http://localhost:${PORT}`
  );
});
