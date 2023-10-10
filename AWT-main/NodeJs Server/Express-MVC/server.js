const express = require("express");
const userRouters = require("./routes/userRoutes");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

//view engine
app.set("view engine", "ejs");

//Urlencoder
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/user", userRouters);

app.listen(port, () => {
  console.log(`server is running 🚀 on http://${hostname}:${port}/`);
});
