const express = require('express');
const products = express.Router();
const  {getProducts, createProduct} = require ('../controllers/products');

products.get('/', getProducts);
products.post('/create', createProduct);



module.exports = {products};