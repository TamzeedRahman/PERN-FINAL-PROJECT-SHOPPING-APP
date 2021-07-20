// DEPENDENCIES
const express = require("express");
const cors = require("cors");

const productsController = require("./controllers/productsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the SkinCare Store!");
});

app.use("/products", productsController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found!")
})

// EXPORT
module.exports = app;
