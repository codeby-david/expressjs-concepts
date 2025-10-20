const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "David" }, { id: 2, name: "Jane" }]);
});

// GET a single user
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `User with ID ${id} fetched successfully` });
});

module.exports = router;
