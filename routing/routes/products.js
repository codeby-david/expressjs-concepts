const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Phone" }, { id: 2, name: "Laptop" }]);
});

// POST a new product
router.post("/", (req, res) => {
  const newProduct = req.body;
  res.status(201).json({ message: "Product added", product: newProduct });
});

module.exports = router;
