import { Router } from "express";
import { getProducts}  from "../controllers/getProducts.js";
import { postProduct } from "../controllers/postProduct.js";
import { searchProduct } from "../controllers/searchProduct.js";
import { getProductById } from "../controllers/getProductById.js";

const router = Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.get("/product/:id", getProductById);
router.get("/search", searchProduct)


export default router;
