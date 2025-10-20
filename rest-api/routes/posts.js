const express = require("express");
const router = express.Router();

let posts = [
  { id: 1, title: "First Post", content: "Hello Express!" },
];

// GET all posts
router.get("/", (req, res) => res.json(posts));

// POST new post
router.post("/", (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT (update)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  posts[index] = { id, ...req.body };
  res.json(posts[index]);
});

// DELETE post
router.delete("/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: "Post deleted" });
});

module.exports = router;
