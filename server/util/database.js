// Import dotenv to load the environment variables from the .env file
require("dotenv").config();

// Import Sequelize
const { Sequelize } = require("sequelize");

// Get the CONNECTION_STRING from the .env file
const { CONNECTION_STRING } = process.env;

// Create a new Sequelize instance with the connection string and configuration
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres", // Specify the SQL dialect
});

// Export the sequelize instance for use in other parts of your application
module.exports = sequelize;
