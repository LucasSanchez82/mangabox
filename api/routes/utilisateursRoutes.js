const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursController');

// Route pour créer un utilisateur
router.post('/utilisateurs', utilisateursController.createUtilisateur);

// Route pour vérifier les informations d'identification de l'utilisateur
router.post('/utilisateurs/login', utilisateursController.checkCredentials);

module.exports = router;
