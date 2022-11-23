const Sequelize = require('sequelize');

const connection = new Sequelize('marbles', 'admin', 'codeworks', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const DB: any = {};

DB.user = require('./user')(connection, Sequelize.DataTypes);
DB.habit = require('./habit')(connection, Sequelize.DataTypes);

DB.connection = connection;
export { DB };
