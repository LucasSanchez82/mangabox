// Importer le modèle d'œuvre
const Oeuvre = require('../models/oeuvreModel');

// Contrôleur pour récupérer toutes les œuvres
exports.getAllOeuvres = async (req, res) => {
  try {
    const oeuvres = await Oeuvre.findAll();
    res.json(oeuvres);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des œuvres' });
  }
};

// Contrôleur pour récupérer une œuvre par son ID
exports.getOeuvreById = async (req, res) => {
  const { id } = req.params;
  try {
    const oeuvre = await Oeuvre.findByPk(id);
    if (oeuvre) {
      res.json(oeuvre);
    } else {
      res.status(404).json({ error: 'Œuvre non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'œuvre' });
  }
};

// Contrôleur pour modifier une œuvre
exports.updateOeuvre = async (req, res) => {
  const { id } = req.params;
  const { titre, adresse_image, lien, chapitre/*, utilisateur_id*/ } = req.body;
  try {
    const oeuvre = await Oeuvre.findByPk(id);
    if (oeuvre) {
      oeuvre.titre = titre;
      oeuvre.adresse_image = adresse_image;
      oeuvre.lien = lien;
      oeuvre.chapitre = chapitre;
      // oeuvre.utilisateur_id = utilisateur_id;
      await oeuvre.save();
      res.json(oeuvre);
    } else {
      res.status(404).json({ error: 'Œuvre non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification de l\'œuvre' });
  }
};

// Contrôleur pour supprimer une œuvre
exports.deleteOeuvre = async (req, res) => {
  const { id } = req.params;
  try {
    const oeuvre = await Oeuvre.findByPk(id);
    if (oeuvre) {
      await oeuvre.destroy();
      res.json({ message: 'Œuvre supprimée avec succès' });
    } else {
      res.status(404).json({ error: 'Œuvre non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'œuvre' });
  }
};

// Contrôleur pour créer une œuvre
exports.createOeuvre = async (req, res) => {
  const { titre, adresse_image, lien, chapitre, utilisateur_id } = req.body;
  try {
    const oeuvre = await Oeuvre.create({ titre, adresse_image, lien, chapitre, utilisateur_id });
    res.json(oeuvre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'œuvre' });
  }
};

// Contrôleur pour modifier plusieurs œuvres d'un coup
exports.updateMultipleOeuvres = async (req, res) => {
  const { oeuvres } = req.body;
  try {
    for (const { id, titre, adresse_image, lien, chapitre } of oeuvres) {
      const oeuvre = await Oeuvre.findByPk(id);
      if (oeuvre) {
        oeuvre.titre = titre;
        oeuvre.adresse_image = adresse_image;
        oeuvre.lien = lien;
        oeuvre.chapitre = chapitre;
        await oeuvre.save();
      }
    }
    res.json({ message: 'Œuvres modifiées avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification des œuvres' });
  }
};

// Contrôleur pour supprimer plusieurs œuvres d'un coup
exports.deleteMultipleOeuvres = async (req, res) => {
  const { ids } = req.body;
  try {
    await Oeuvre.destroy({ where: { id: ids } });
    res.json({ message: 'Œuvres supprimées avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression des œuvres' });
  }
};