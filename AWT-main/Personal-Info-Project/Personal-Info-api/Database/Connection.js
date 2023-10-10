const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/CHARUSAT", {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To Database...");
  })
  .catch((error) => {
    console.log(error);
  });
