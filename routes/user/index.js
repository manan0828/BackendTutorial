const express = require('express');
const Route = express.Router();
const userController = require('../../controllers/user');

Route.post('/createuser', userController.createUser);
Route.get('/getusers', userController.getUsers);
Route.post('/getbyname', userController.getByName);

module.exports = Route