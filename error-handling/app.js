//In Express, you can catch and handle errors using special middleware with four parameters (err, req, res, next).const express = require("express");
const app = express();

// Simulate an error
app.get("/", (req, res, next) => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    next(error); // pass to error handler
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error message:", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3003, () => console.log("Error"));

//explanation of code
// Express knows a function is an error handler if it has 4 parameters.

// Always call next(error) to pass errors to your handler.
