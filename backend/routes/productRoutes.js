const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.post("/product/create", productController.create_product);

router.get("/products", productController.products);

router.get("/products/:id", productController.product);

module.exports = router;