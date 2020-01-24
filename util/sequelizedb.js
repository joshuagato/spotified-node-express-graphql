const Sequelize = require('sequelize');

const sequelize = new Sequelize('spotified', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
