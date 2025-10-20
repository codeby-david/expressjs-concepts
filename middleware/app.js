const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger); // use custom middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Middleware demo successful!");
});

app.listen(5000, () => {
  console.log("Middleware server running on http://localhost:5000");
});
