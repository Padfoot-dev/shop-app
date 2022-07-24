const express = require("express");


const router = express.Router();


router.get("/add-products",(req,res,next)=> {

    res.send("<h1>Add products</h1>");
})


router.post("/add-products", (req,res,next)=> {
    res.send("add products post request.")
});


module.exports = router;