const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

// Function to create a JWT token
const createToken = (username, userId) => {
  return jwt.sign({ username, userId }, SECRET, { expiresIn: "2 days" });
};

// Sample authentication function (you need to implement it according to your app's requirements)
const authenticateUser = (username, password) => {
  // Placeholder: replace with real authentication logic
  return username === "admin" && password === "password"; // Example condition
};

module.exports = {
  login: async (req, res) => {
    let { username, password } = req.body;
    const token = createToken(username, password);
    res.status(200).send(token);
  },
  register: async (req, res) => {
    console.log("register");
    res.sendStatus(200);
  },

  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      // Placeholder for registration logic that might create a user id
      const userId = 123; // Example user ID after successful registration
      const token = createToken(username, userId); // Create token with username and user ID
      res.status(201).send({ token });
    } catch (error) {
      res.status(500).send({ message: "Server error" });
    }
  },
};
