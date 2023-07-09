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

// Route pour créer une œuvre
router.post('/oeuvres', oeuvresController.createOeuvre);

// Route pour modifier plusieurs œuvres d'un coup
router.put('/oeuvres', oeuvresController.updateMultipleOeuvres);

// Route pour supprimer plusieurs œuvres d'un coup
router.delete('/oeuvres', oeuvresController.deleteMultipleOeuvres);


module.exports = router;
