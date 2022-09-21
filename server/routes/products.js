const express = require('express');
const products = express.Router();
const  {getProducts,getProduct, createProduct, getProductByCode} = require ('../controllers/products');

products.get('/:page/:limit', getProducts);
products.post('/', createProduct);
products.get('/:id', getProduct);
products.get('/code/a/z/:code', getProductByCode);




module.exports = {products};