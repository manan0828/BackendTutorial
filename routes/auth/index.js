const express = require('express');
const Route = express.Router();
const authController = require('../../controllers/auth')

Route.post('/login', authController.login);
Route.post('/signIn', authController.signIn);

module.exports = Route;