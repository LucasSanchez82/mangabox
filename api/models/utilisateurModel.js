const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Utilisateur = db.define('utilisateur', {
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
}, {
  timestamps: false // Desactive les champs createdAt et updatedAtt
});

module.exports = Utilisateur;
