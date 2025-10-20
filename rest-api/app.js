const express = require("express");
const app = express();
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.listen(7000, () => console.log("REST API running on http://localhost:7000"));
