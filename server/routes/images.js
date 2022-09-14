const express = require('express');
const products = express.Router();
const {generateUploadURL} = require('../controllers/images')

products.get('/url', generateUploadURL);



module.exports = {products};