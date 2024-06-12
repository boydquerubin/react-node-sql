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

const app = express();
const PORT = process.env.PORT || 3000;

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
app.post("/posts", addPost);

// Edit an existing post
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  editPost(req, res, id);
});

// Delete a post
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  deletePost(req, res, id);
});

// Start the server
app.listen(PORT, () => console.log(`App running on Port ${PORT}`));
