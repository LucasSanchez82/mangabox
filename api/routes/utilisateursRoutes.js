const express = require('express');
const router = express.Router();
const utilisateursController = require('../controllers/utilisateursController');

// Route pour créer un utilisateur
router.post('/', utilisateursController.createUtilisateur);

// Route pour vérifier les informations d'identification de l'utilisateur
router.post('/login', utilisateursController.checkCredentials);

module.exports = router;
