const express = require('express');
const router = express.Router();
const oeuvresController = require('../controllers/oeuvresController');

// Route pour récupérer toutes les œuvres
router.get('/oeuvres', oeuvresController.getAllOeuvres);

// Route pour récupérer une œuvre par son ID
router.get('/oeuvres/:id', oeuvresController.getOeuvreById);

// Route pour modifier une œuvre
router.put('/oeuvres/:id', oeuvresController.updateOeuvre);

// Route pour supprimer une œuvre
router.delete('/oeuvres/:id', oeuvresController.deleteOeuvre);

module.exports = router;
