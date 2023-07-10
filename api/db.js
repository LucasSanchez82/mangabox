const { Sequelize } = require('sequelize');

// Configurer les informations de connexion à la base de données
const sequelize = new Sequelize('mangabox', 'mangabox', 'T.lOjXm3Lz2YlTcq', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
