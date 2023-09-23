const express = require('express');
const Route = express.Router();
const transactionController = require('../../controllers/transaction');
const { transactionModel } = require('../../models');

Route.post('/debittransaction', transactionController.debitTransaction);
Route.get('/getsendertransaction', transactionController.getSenderTransaction);
Route.get("/getreceivertransaction", transactionController.getReceiverTransaction);
Route.get("/greatertransaction", transactionController.greaterTransaction);

module.exports = Route