require("./Database/dbconnection");
require("dotenv").config({ path: "../.env" });
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

require("./Routes/ProjectRoute")(app);

app.listen(PORT, () => {
  console.log(`Server listening on : http://localhost:${PORT}`);
});
