require("dotenv").config({ path: "./.env" });
const URL = process.env.DBURL;
const mongoose = require("mongoose");

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database..");
  })
  .catch((error) => {
    console.error("Error Connecting to the MongoDB : " + error);
  });
