const express = require('express');
const users = express.Router();
const {getUsers, register, checkEmail} = require('../controllers/users')

users.get('/', getUsers);
users.post('/register', register);
users.get('/check/:email', checkEmail)



module.exports = {users};   