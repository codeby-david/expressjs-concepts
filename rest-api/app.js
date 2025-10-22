//REST(Representational State Transfer) is a style of designing APIs where each resource has its own URL and standard HTTP methods.


const express = require("express");
const postsRouter = require("./routes/posts");

const app = express();
app.use(express.json());
app.use("/posts", postsRouter);

app.listen(3000, () => console.log("REST API running on http://localhost:3000"));


// Explanation:

// GET → fetch data

// POST → create new resource

// PUT → update

// DELETE → remove