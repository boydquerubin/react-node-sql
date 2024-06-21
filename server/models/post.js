// Import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Import your Sequelize connection
const sequelize = require("../util/database");

// Define the Post model with sequelize.define and export it
module.exports = {
  Post: sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Assumes that every post must have a title.
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false, // Assumes that every post must have content.
    },
    privateStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default to false meaning the post is public by default.
    },
  }),
};
