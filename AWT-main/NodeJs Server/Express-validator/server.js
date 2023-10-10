const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 4000;


//Urlencoder
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running 🚀 on http://${hostname}:${port}/`);
});
