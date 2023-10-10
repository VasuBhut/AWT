// models/profile.js
const { DataTypes } = require("sequelize");
// const sequelize = require('../db');
// const sequelize = require('../dbConfig');

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      fullName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      tableName: "tblProfile",
      engine: "InnoDB", //InnoDB, MYISAM, MEMORY, CSV, etc
    }
  );
  return Profile;
};
// module.exports = Profile;
