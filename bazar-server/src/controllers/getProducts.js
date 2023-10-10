const products = require("../models/product.js");

const getProducts = async (req, res) => {
  try {
    const allProducts = await products.find()
    res.json(allProducts)
  } catch (error) {
    res.json(error)
  }
}

module.exports = { getProducts };
