const express = require("express");
const helmet = require("helmet");
const https = require("https");
const path = require("path");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

//express object
const app = express();
app.use(helmet());


//Urlencoder
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes
app.get("/", (req, res) => {
  res.send("Welcom to SSL Server!");
});
app.get("/certificate", (req, res) => {
  res.send("This is SSL Cretificate!");
});

//SSL Server Code
const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'certi', "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, 'certi', "cert.pem"))
},app)

sslServer.listen(port, () => {
  console.log(`server is running 🚀 on https://${hostname}:${port}/`);
});


/*Cross-Origin-Resorce-Policy -> write a manual code by taking two urls, one in blacklist nd one in white list
the blacklist url shouldn't get processed*/

/*round trip time for a http packet and how to reduce it without third party*/