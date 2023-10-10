// models/address.js
const { DataTypes } = require("sequelize");
// const sequelize = require('../db');
// const sequelize = require('../dbConfig');

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.STRING,
    },
    {
      tableName: "tblAddress",
      engine: "InnoDB", //InnoDB, MYISAM, MEMORY, CSV, etc
    }
  );
  return Address;
};
// module.exports = Address;
