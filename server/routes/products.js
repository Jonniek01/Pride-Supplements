const express = require('express');
const products = express.Router();
const  {getProducts,getProduct, createProduct} = require ('../controllers/products');

products.get('/:page/:limit', getProducts);
products.post('/', createProduct);
products.get('/:id', getProduct);



module.exports = {products};