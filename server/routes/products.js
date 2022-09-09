const express = require('express');
const products = express.Router();
const  {getProducts} = require ('../controllers/products');

products.get('/', getProducts);

module.exports = {products};