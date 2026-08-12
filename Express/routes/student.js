const express = require('express');
const router = express.Router();

router.get("/students" , (req , res) =>{
    //... 
});

router.get("/students/:id" , (req , res) =>{
    //...
});

router.post("/students" , (req , res) => {
    //...
});

router.put("/students" , (req , res) => {
    //...
});

router.patch("/students/:id" , (req , res) =>{
    //...
});

router.delete("/students/:id" , (req, res) =>{
    //...
});

module.exports = router;