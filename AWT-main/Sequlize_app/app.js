
require("dotenv").config();
const express = require("express");
const app = express();

require("./model")
const userCtrl=require("./controller/studentController");

app.use(express.json());

app.get("/",(req,res)=>{
  res.send({ title: 'Welcome to nodeJS, Sequelize and MySql Tutorial' });
})

app.get("/insert", userCtrl.addStudent)
app.get("/display", userCtrl.findStudent)


const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});