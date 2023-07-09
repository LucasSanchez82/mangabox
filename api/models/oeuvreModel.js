const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Oeuvre = db.define('Oeuvre', {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresse_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lien: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  chapitre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Oeuvre;
