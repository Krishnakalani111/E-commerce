const Product =require("../models/productModel")

//create  product 
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    return res.json({
        status: 201,
        product
    })
}


exports.getAllproducts = (req, res, next) => {
    res.status(200).json({ message: "route is good" })
    next();
}
    

exports.deleteProduct = (req, res, next) => {
    Product.delete(req.body)
}