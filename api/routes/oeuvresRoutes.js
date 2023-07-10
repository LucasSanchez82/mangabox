const express = require('express');
const router = express.Router();
const oeuvresController = require('../controllers/oeuvresController');

// Route pour récupérer toutes les œuvres
router.get('/', oeuvresController.getAllOeuvres);

// Route pour récupérer une œuvre par son ID
router.get('/:id', oeuvresController.getOeuvreById);

// Route pour modifier une œuvre
router.put('/:id', oeuvresController.updateOeuvre);

// Route pour supprimer une œuvre
router.delete('/:id', oeuvresController.deleteOeuvre);

// Route pour créer une œuvre
router.post('/', oeuvresController.createOeuvre);

// Route pour modifier plusieurs œuvres d'un coup
router.put('/', oeuvresController.updateMultipleOeuvres);

// Route pour supprimer plusieurs œuvres d'un coup
router.delete('/', oeuvresController.deleteMultipleOeuvres);


module.exports = router;
