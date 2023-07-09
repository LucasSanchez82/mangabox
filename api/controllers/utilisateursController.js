// Importer le modèle d'utilisateur
const Utilisateur = require('../models/utilisateurModel');

// Contrôleur pour créer un utilisateur
exports.createUtilisateur = async (req, res) => {
  const { nom, prenom, mail, mot_de_passe } = req.body;
  try {
    const utilisateur = await Utilisateur.create({ nom, prenom, mail, mot_de_passe });
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};

// Contrôleur pour vérifier les informations d'identification de l'utilisateur
exports.checkCredentials = async (req, res) => {
  const { mail, mot_de_passe } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ where: { mail, mot_de_passe } });
    if (utilisateur) {
      res.json({ message: 'Informations d\'identification valides' });
    } else {
      res.status(401).json({ error: 'Informations d\'identification invalides' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la vérification des informations d\'identification' });
  }
};
