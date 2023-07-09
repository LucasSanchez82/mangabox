# Documentation de l'API des œuvres

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce projet à partir du référentiel GitHub.
3. Exécutez la commande `npm install` pour installer les dépendances.

## Configuration de la base de données

1. Créez une base de données MySQL.
2. Dans le fichier `db.js`, configurez les informations de connexion à la base de données (nom, nom_utilisateur, mot_de_passe et hote_de_la_base_de_donnees).

## Exécution de l'API

1. Exécutez la commande `npm start` pour lancer l'API.
2. L'API sera accessible à l'adresse `http://localhost:3000`.

## Endpoints

### Utilisateurs

- `POST /utilisateurs` : Crée un nouvel utilisateur.
- `POST /utilisateurs/login` : Vérifie les informations d'identification de l'utilisateur.

### Œuvres

- `GET /oeuvres` : Récupère toutes les œuvres.
- `GET /oeuvres/:id` : Récupère une œuvre par son ID.
- `PUT /oeuvres/:id` : Modifie une œuvre.
- `DELETE /oeuvres/:id` : Supprime une œuvre.
- `POST /oeuvres` : Crée une nouvelle œuvre.
- `PUT /oeuvres` : Modifie plusieurs œuvres d'un coup.
- `DELETE /oeuvres` : Supprime plusieurs œuvres d'un coup.

Consultez la documentation complète pour plus de détails sur les paramètres et les réponses de chaque endpoint.

