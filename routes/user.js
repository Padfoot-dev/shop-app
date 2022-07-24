const { application } = require("express");
const express = require("express");

const router = express.Router();



application.get("/products", (req,res,next)=> {
    res.send("<h1>LIst products</h1>")
})

module.exports = router;