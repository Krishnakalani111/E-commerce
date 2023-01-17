const express = require("express");
const { getAllproducts, createProduct } = require("../controllers/prodcutController");

 const router = express.Router();
router.route("/products").get(getAllproducts);
router.route("/product/new").post(createProduct)
module.exports=router