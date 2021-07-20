// DEPENDENCIES
const express = require("express");
const products = express.Router({ mergeParams: true });
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../queries/products.js");
const {
  ItemNotCreatedError,
  ValidationError,
  customErrorHandler,
} = require("../helper.js");

// MIDDLEWARE
const validateProduct = (req, res, next) => {
  try {
    const { name, url, price, detail } = req.body;

    let isProductValid = true;
    let errorMsg = "Product request not formatted correctly: ";

    if (typeof name !== "string") {
      isProductValid = false;
      errorMsg += "The 'name' field must be of type 'string'";
    }
    if (typeof url !== "string") {
      isProductValid = false;
      errorMsg += "The 'url' field must be of type 'string'";
    }
    if (typeof price !== "number") {
      isProductValid = false;
      errorMsg += "The 'price' field must be of type 'number'";
    }
    if (typeof detail !== "string") {
      isProductValid = false;
      errorMsg += "The 'detail' field must be of type 'string'";
    }
    if (isProductValid !== true) {
      throw new ValidationError(errorMsg);
    }
  } catch (e) {
    next(e);
  }
  return next();
};

// INDEX
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.json(allProducts);
});

// SHOW
Products.get("/:id", async (req, res) => {
  const { id } = req.params; 
  try {
    const Product = await getProduct(id);
    if (Product.id) {
      res.json(Product);
    } else {
      console.log(`Database error: ${Product}`);
      throw `There is no Product with id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({ error: "Resource not found.", message: e });
  }
});

// CREATE
Products.post("/", validateProduct, async (req, res, next) => {
  try {
    const Product = await createProduct(req.body);
    if (Product["id"]) {
      res.json(Product);
    } else {
      const msg = `not added to database: ${JSON.stringify(req.body)}`;
      throw new ItemNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// UPDATE
Products.put("/:id", validateProduct, async (req, res, next) => {
  const { id } = req.params;
  try {
    const Product = await updateProduct(id, req.body);
    if (Product["id"]) {
      res.json(Product);
    } else {
      const msg = `not added to database: ${JSON.stringify(req.body)}`;
      throw new ItemNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// DELETE
Products.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteProduct(id);
    if (deleted.id) {
      res.json(deleted);
    } else {
      const msg = `not deleted from database: ${id}`;
      throw new ItemNotCreatedError(msg);
    }
  } catch (e) {
    next(e);
  }
});


// ERROR HANDLING
Products.use(customErrorHandler);

module.exports = Products;