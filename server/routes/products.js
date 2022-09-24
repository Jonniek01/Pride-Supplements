const express = require('express');
const products = express.Router();
const  {getProducts,getProduct, createProduct, getProductByCode, search} = require ('../controllers/products');

products.get('/:page/:limit', getProducts);
products.post('/', createProduct);
products.get('/:id', getProduct);
products.get('/code/a/z/:code', getProductByCode);
products.get('/products/search/:query', search);




module.exports = {products};