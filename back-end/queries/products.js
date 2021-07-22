const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

// SHOW
const getProduct = async (id) => {
    try {
      const oneProduct = await db.one("SELECT * FROM Products WHERE id=$[id]", {
        id: id,
      });
      return oneProduct;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createProduct = async (product) => {
    try {
      if (!product.name) {
        throw 'You must specify a value for "name"';
      }
      const newProduct = await db.one(
        "INSERT INTO Products (name, url, price, detail) VALUES($1, $2, $3, $4) RETURNING *",
        [product.name, product.url, product.price, product.detail]
      );
      return newProduct;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
 
// DELETE
const deleteProduct = async (id) => {
    try {
      return await db.one("DELETE FROM products WHERE id=$1 RETURNING *;", id);
    } catch (error) {
      return error;
    }
  };
  
  // UPDATE
  const updateProduct = async (id, product) => {
    try {
      return await db.one(
        "UPDATE Products SET name = $1, url = $2, price = $3, detail = $4 WHERE id=$5 RETURNING *;",
        [product.name, product.url, product.price, product.detail, id]
      );
    } catch (error) {
      return error;
    }
  };



module.exports = {
    getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};