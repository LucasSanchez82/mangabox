const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Utilisateur = db.define('Utilisateur', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Utilisateur;
