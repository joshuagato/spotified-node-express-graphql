const Sequelize = require('sequelize');
const sequelize = require('../util/sequelizedb');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resetToken: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resetTokenExpiration: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = User;
