const transactionModel = require('../../models').transactionModel;
const userModel = require("../../models").userModel;
const { Op } = require("sequelize");

module.exports = {
    async debitTransaction(data) {
        let s_record = await userModel.findByPk(data.sender);
        let s_amount = await s_record.amount;
        s_record.set({
            amount: s_amount - data.amount
        });
        await s_record.save();
        let r_record = await userModel.findByPk(data.receiver);
        let r_amount = await r_record.amount;
        r_record.set({
            amount: r_amount + data.amount
        });
        await r_record.save();
        console.log(data);
        return await transactionModel.create(data);
    },

    async getSenderTransaction(data) {
        return await transactionModel.findAll({
            where: {
                "sender": data.sender
            }
        });
    },

    async getReceiverTransaction(data) {
        return await transactionModel.findAll({
            where: {
                "receiver": data.receiver
            }
        });
    },

    async greaterTransaction(data) {
        return await transactionModel.findAll({
            where: {
                "amount": {
                    [Op.gte] : data.amount
                }
            }
        });
    }
};