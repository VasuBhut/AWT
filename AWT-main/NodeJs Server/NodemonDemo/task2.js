const express = require("express");
const router = require("./task2Router"); // Assuming the router.js file is in the same directory.
require("dotenv").config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
const app = express();

app.use("/", router);
app.use("/display", router);

app.listen(port, function () {
  console.log(`server is running on http://${hostname}:${port}/`);
});
