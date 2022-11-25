const express = require('express');
const router = express.Router();


const {getProducts, newProduct, getSingleProducts, UpdateProduct, deleteProduct}= require('../controllers/productController');

router.route('/products').get(getProducts);

router.route('/admin/product/new').post(newProduct);  

router.route('/product/:id').get(getSingleProducts);

router.route('/admin/product/:id').put(UpdateProduct);

router.route('/admin/product/:id').delete(deleteProduct);


module.exports = router;
