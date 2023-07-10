const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

// Importer les routes
const utilisateursRoutes = require('./api/routes/utilisateursRoutes');
const oeuvresRoutes = require('./api/routes/oeuvresRoutes');

// Ajoutez cette ligne pour analyser les données JSON de la requête
app.use(express.json());

// Utiliser les routes
app.use('/utilisateurs', utilisateursRoutes);
app.use('/oeuvres', oeuvresRoutes);
router.get('/', () => 'salut les bg');
// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
