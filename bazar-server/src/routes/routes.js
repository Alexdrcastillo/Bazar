const express = require("express");
const {getProducts} = require("../controllers/getProducts.js");
const {postProduct} = require("../controllers/postProduct.js");
const {searchProduct} = require("../controllers/searchProduct.js");
const {getProductById}= require("../controllers/getProductById.js");

const router = express.Router();

router.get("/products", getProducts);
router.post("/", postProduct);
router.get("/product/:id", getProductById);
router.get("/search", searchProduct)

module.exports = router;
