const express = require("express");
const router = express.Router();

let posts = [{ id: 1, title: "My first post" }];

// GET all posts
router.get("/", (req, res) => res.json(posts));

// POST new post
router.post("/", (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

module.exports = router;
