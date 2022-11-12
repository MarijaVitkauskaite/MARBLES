const Sequelize = require('sequelize');

const connection = new Sequelize('marbles', 'marijavitkauskaite', '', {
  host: 'localhost',
  dialect: 'postgres'
});

const box = {};

box.user = require('./user')(connection, Sequelize.DataTypes);
box.habit = require('./habit')(connection, Sequelize.DataTypes);
box.daily = require('./daily')(connection, Sequelize.DataTypes);


box.connection = connection;
module.exports = box;