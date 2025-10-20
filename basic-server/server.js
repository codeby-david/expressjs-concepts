
//  Basic Express Server Setup

// Express is a minimal and flexible Node.js framework
// used to build web servers and APIs easily.


// Step 1: Import express
const express = require("express");

// Step 2: Initialize the express app
const app = express();

// Step 3: Define a port
const PORT = 3000;

// Step 4: Create a simple route
app.get("/", (req, res) => {
  res.send("Welcome to your first Express server!");
});

// Step 5: Start the server and listen on the port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
