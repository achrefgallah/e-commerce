const express=require('express');
const router=express.Router();

const {getProducts} = require('../controllers/productController');

router.get('./product', getProducts)




module.exports= router