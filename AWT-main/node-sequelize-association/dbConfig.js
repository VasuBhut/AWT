// dbConfig.js
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.DIALECT,
    logging: false,
    pool: { max: 5, min: 0, idle: 1000 },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully with Database");
  })
  .catch((err) => {
    console.log("Issue with DB" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./model/User")(sequelize, DataTypes);
db.profile = require("./model/Profile")(sequelize, DataTypes);
db.address = require("./model/Address")(sequelize, DataTypes);

db.sequelize
  .sync({ force: true }) // {force:true}
  .then(() => {
    console.log("Database is Sync");
  });

module.exports = db;
