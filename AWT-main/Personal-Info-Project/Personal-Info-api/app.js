require("./Database/Connection")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const PersonalInfoRoutes = require("./Routes/PersonalInfoRoutes");

const hostname = "127.0.0.1";
const port = 4000;

// New app using express module
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

require("./Routes/PersonalInfoRoutes", PersonalInfoRoutes)(app);


app.listen(4000, function () {
  console.log(`server is running on http://${hostname}:${port}/`);
});
