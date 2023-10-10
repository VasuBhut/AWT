// models/user.js
// const { sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../dbConfig');

// const User = sequelize.define('User', {
//     username: DataTypes.STRING,
// });

// module.exports = User;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
    },
    {
      tableName: "tblUser",
      engine: "InnoDB", //InnoDB, MYISAM, MEMORY, CSV, etc
    }
  );

  return User;
};
