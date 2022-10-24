const express = require('express');
const orders = express.Router();
const  {makeOrder} = require ('../controllers/orders');
const {getOAuthToken, lipaNaMpesaOnline, lipaNaMpesaOnlineCallback} = require('../middleware/mpesa');


orders.post('/', getOAuthToken, lipaNaMpesaOnline,lipaNaMpesaOnlineCallback, makeOrder);
//route to get the auth token
orders.get('/get-auth-token',getOAuthToken);

//lipa na mpesa online 
orders.post('/lipa-na-mpesa',getOAuthToken,lipaNaMpesaOnline);

//callback url
orders.post('/lipa-na-mpesa-callback',lipaNaMpesaOnlineCallback);


module.exports = {orders};