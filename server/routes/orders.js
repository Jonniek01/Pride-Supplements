const express = require('express');
const orders = express.Router();
const  {makeOrder} = require ('../controllers/orders');
const mpesa = require('../controllers/mpesa');


orders.post('/', makeOrder);
//route to get the auth token
orders.post('/o/o/o/get-auth-token',mpesa.getOAuthToken);

//lipa na mpesa online 
orders.post('/lipa-na-mpesa',mpesa.getOAuthToken,mpesa.lipaNaMpesaOnline);

//callback url
orders.post('/lipa-na-mpesa-callback',mpesa.lipaNaMpesaOnlineCallback);


module.exports = {orders};