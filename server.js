const express = require('express');
const app = express();
const port = 3000;

// Importer les routes
const utilisateursRoutes = require('./api/routes/utilisateursRoutes');
const oeuvresRoutes = require('./api/routes/oeuvresRoutes');

// Utiliser les routes
app.use('/utilisateurs', utilisateursRoutes);
app.use('/oeuvres', oeuvresRoutes);

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
