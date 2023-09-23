const sequelize = require('sequelize');
const userModel = require('./user');
const transactionModel = require('./transaction');

exports.db_config = new sequelize(
    'LoginRecords',
    'root',
    //password
    "sqlmanan28", {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        timezone: '+05:30',
        logging: false,
    }
);

exports.userModel = userModel(exports.db_config);
exports.transactionModel = transactionModel(exports.db_config);