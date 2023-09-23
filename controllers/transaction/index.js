const transactionQuery = require('../../querries/transaction');

module.exports = {
    async debitTransaction(req, res) {
        let data = req.body;
        try {
            let transaction = await transactionQuery.debitTransaction(data);
            return res 
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: transaction
                });
        } catch (err) {
            console.log(err);
            return res 
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                });
        }
    },

    async getSenderTransaction(req, res) {
        let data = req.body;
        try {
            let transaction = await transactionQuery.getSenderTransaction(data);
            if(transaction != null && transaction != undefined && transaction != '') {
                return res
                    .status(400)
                    .send({
                        code: 200,
                        status: "transaction exist",
                        data: transaction
                    });
            }

            let transactionExist = await transactionQuery.getSenderTransaction(data);
            console.log(transactionExist);
            return res
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: transactionExist
                });
        } catch (err) {
            console.log(err);
            return res
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                });
        }
    },

    async getReceiverTransaction(req, res) {
        let data = req.body;
        try {
            let transaction = await transactionQuery.getReceiverTransaction(data);
            if(transaction != null && transaction != undefined && transaction != '') {
                return res
                    .status(400)
                    .send({
                        code: 200,
                        status: "transaction exist",
                        data: transaction
                    });
            }

            let transactionExist = await transactionQuery.getReceiverTransaction(data);
            return res
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: transactionExist
                });
        } catch (err) {
            console.log(err);
            return res
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                })
        }
    },

    async greaterTransaction(req, res) {
        let data = req.body;
        try {
            let transaction = await transactionWuery.greaterTransaction(data);
            if(transaction != null && transaction != undefined && transaction != '') {
                return res
                    .status(400)
                    .send({
                        code: 200,
                        status: "transaction exist",
                        data: transaction
                    });

            }

            let transactionExust = await transactionQuery.greaterTransaction(data0);
            return res
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: transactionExist
                });
        } catch (err) {
            console.log(err);
            return res
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                });
        }
    }
}