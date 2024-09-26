const express = require("express");
const router = express.Router();
const Product = require("../models/Product")

router.get("/allProducts", async (req,res)=>{
    try {
        const allProducts = await Product.find();
        res.send({
            message: true,
            data: allProducts,
        });

    } catch (error){
        res.send({
            message: "Error in products",
            error: error,
        });
    }
});

// create a new product

router.post("/createProduct", async(req,res)=>{
    const product = new product({
        name: req.body.name,
        desc: req.body.desc,
        price:req.body.price,
        imageUrl: req.body.imageUrl,
    });
    console.log(product);
});

//get a single product

router.get("/single/:id", async(req,res)=>{
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product){
            res.send({
                message: false,
                data: "product not found",
            })
        }
        res.send({
            message:true,
            data: product,
        });
    } catch (error) {
        res.send({
            message: "Error in getting product",
            error: error,
        });
    }
})

module.exports = router;