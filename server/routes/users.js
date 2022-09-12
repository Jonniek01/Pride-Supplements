const express = require('express');
const users = express.Router();
const {getUsers, register} = require('../controllers/users')

users.get('/', getUsers);
users.post('/register', register);



module.exports = {users};