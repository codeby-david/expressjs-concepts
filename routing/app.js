

//  Express Routing Example

// Routing means defining endpoints (URLs) that
// respond to client requests.

const express = require("express");
const app = express();
const PORT = 4000;

// Import route files
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

// Middleware to parse JSON body data
app.use(express.json());

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Routing app running on http://localhost:${PORT}`);
});
