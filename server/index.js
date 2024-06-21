require("dotenv").config();
const { isAuthenticated } = require("./middleware/isAuthenticated.js"); // Adjust path as necessary
const express = require("express");
const cors = require("cors");
const { register, login } = require("./controllers/auth.js");
const {
  getAllPosts,
  getCurrentUserPosts,
  addPost,
  editPost,
  deletePost,
} = require("./controllers/posts.js");
const sequelize = require("./util/database");
const { User } = require("./models/user");
const { Post } = require("./models/post");

const app = express();
const PORT = process.env.PORT || 4004;

User.hasMany(Post);
Post.belongsTo(User);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post("/register", register);
app.post("/login", login);

// Get all posts
app.get("/posts", getAllPosts);

// Get posts by specific user
app.get("/userposts/:userId", (req, res) => {
  const { userId } = req.params;
  getCurrentUserPosts(req, res, userId);
});

// Add a new post
app.post("/posts", isAuthenticated, addPost);

// Edit an existing post
app.put("/posts/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  editPost(req, res, id);
});

// Delete a post
app.delete("/posts/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  deletePost(req, res, id);
});

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to synchronize database:", err);
  });
