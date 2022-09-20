const express = require('express');
const codes = express.Router();
const { readCodes, addCode} = require('../controllers/codes')

codes.get('/', readCodes);
codes.post('/create', addCode);



module.exports = {codes};