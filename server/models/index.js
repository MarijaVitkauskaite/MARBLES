const Sequelize = require('sequelize');

const connection = new Sequelize('marbles', 'marijavitkauskaite', '', {
  host: 'localhost',
  dialect: 'postgres'
});

const box = {};

box.user = require('./user')(connection, Sequelize.DataTypes);
box.habit = require('./habit')(connection, Sequelize.DataTypes);

box.user.hasMany(box.habit); //one to many relation 

box.connection = connection;
module.exports = box;