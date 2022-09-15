const express = require('express');
const products = express.Router();
const  {getProducts, createProduct} = require ('../controllers/products');

products.get('/:page/:limit', getProducts);
products.post('/', createProduct);



module.exports = {products};