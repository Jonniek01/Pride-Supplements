const express = require('express');
const users = express.Router();
const {getUsers, register, login} = require('../controllers/users')

users.get('/', getUsers);
users.post('/register', register);
users.post('/login', login);



module.exports = {users};   