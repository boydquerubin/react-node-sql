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
    try {
      const { username, password } = req.body;
      console.log("Logging in with:", username, password); // Log the input for debugging
      if (authenticateUser(username, password)) {
        const userId = 123; // Replace with actual user ID from database
        const token = createToken(username, userId);
        console.log("Token generated:", token); // Check the token output
        res.status(200).send({ token });
      } else {
        console.log("Authentication failed for:", username); // Log failed attempts
        res.status(401).send({ message: "Authentication failed" });
      }
    } catch (error) {
      console.log("Login error:", error);
      res.status(500).send({ message: "Server error" });
    }
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
