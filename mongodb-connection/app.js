//Express can integrate easily with databases like MongoDB using Mongoose for modeling and CRUD operations.
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");

const app = express();
app.use(express.json());

mongoose.connect("MONGO DB URL IS PUT HERE")
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log(" DB Connection Error:", err));

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

app.listen(3000, () => console.log("MongoDB running on port 3000"));



// Explanation:

// Mongoose helps define a schema(structure) for documents.

//   mongoose.connect() connects your app to the MongoDB server.

// The User model lets you interact with the database easily.