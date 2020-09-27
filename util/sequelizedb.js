// const Sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   dialect: 'mysql',
//   host: process.env.HOST_NAME
// });

// const sequelize = new Sequelize('spotified', 'postgres', 'ITCstd3712', {
//   port: '5432',
//   host: 'localhost',
//   dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// const sequelize = new Sequelize('postgres://postgres:ITCstd3712@localhost:5432/spotified');
const sequelize = new Sequelize("postgres://fvmfyvpzgxsswv:40a3884b431416b21165636c2673f5f3394c3c67fb4316eb1f56e95f85d4e2e9@ec2-107-20-104-234.compute-1.amazonaws.com:5432/d3mbdivi55eov8");

module.exports = sequelize;
