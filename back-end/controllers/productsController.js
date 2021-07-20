const express = require("express");
const products = express.Router();
const productsArray = require("../models/productData");

products.get("/", (req, res) => {
  res.json(productsArray);
});

products.get("/:index", (req, res) => {
  const { index } = req.params;
  if (productsArray[index]) {
    res.status(200).json(productsArray[index]);
  } else {
    res.redirect("404");
  }
});

products.post("/", (req, res) => {
  productsArray.push(req.body);
  res.json(productsArray[productsArray.length - 1]);
});

products.put("/:index", (req, res) => {
  const { index } = req.params;
  if (productsArray[index]) {
    productsArray[index] = req.body;
    res.json(productsArray[index]);
  } else {
    res.redirect("404");
  }
});

products.delete("/:index", (req, res) => {
  const { index } = req.params;
  const removedTransaction = productsArray.splice(index, 1);
  if (productsArray[index]) {
    res.json(removedTransaction);
  } else {
    res.redirect("404");
  }
});

module.exports = products;