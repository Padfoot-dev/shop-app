const express = require("express");
const path = require("path");

const router = express.Router();


router.get("/add-products",(req,res,next)=> {

    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
})


router.post("/add-products", (req,res,next)=> {
    res.send("add products post request.")
});


module.exports = router;