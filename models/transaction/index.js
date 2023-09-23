const {DataTypes} = require('sequelize');

module.exports = (db_config) => {
    const transaction = db_config.define(
        'transaction', {

            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            sender: {
                type: DataTypes.INTEGER,
            },
            receiver: {
                type: DataTypes.INTEGER
            },
            amount: {
                type: DataTypes.DOUBLE
            },
            note: {
                type: DataTypes.STRING,
                allowNull: true
            },
            mot: {
                type: DataTypes.STRING,
                allowNull: true
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }
    );

    return transaction;
}