// required for app
require("dotenv").config();
const jwt = require("jsonwebtoken");
// imports SECRET .env file
const { SECRET } = process.env;

module.exports = {
  isAuthenticated: (req, res, next) => {
    // declaring variable for authorization
    const headerToken = req.get("Authorization");

    if (!headerToken) {
      console.log("ERROR IN auth middleware");
      res.sendStatus(401);
    }

    let token;
    // verify token
    try {
      token = jwt.verify(headerToken, SECRET);
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }

    if (!token) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    // moves to next
    next();
  },
};
