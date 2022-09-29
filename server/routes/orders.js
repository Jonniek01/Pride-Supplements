const express = require('express');
const orders = express.Router();
const  {makeOrder} = require ('../controllers/orders');

orders.post('/', makeOrder);


module.exports = {orders};