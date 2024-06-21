// Import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Import your Sequelize connection
const sequelize = require("../util/database");

// Define the User model with sequelize.define and export it
module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Assumes that every user must have a username.
    },
    hashedPass: {
      type: DataTypes.STRING,
      allowNull: false, // Assumes that every user must have a password.
    },
  }),
};
