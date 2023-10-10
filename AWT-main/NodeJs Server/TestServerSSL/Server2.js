const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.use(rateLimit({
  windowMs: 10000,
  max: 4,
  message: {
    code: 429,
    message: "Too Many Request"
  }
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running 🚀 on http://${hostname}:${port}/`);
});
