# 🧠 Culture Quiz

Application web de quiz de culture générale avec **React** (frontend) et **Node.js/Express** (backend), incluant un mode **multijoueur en temps réel** via WebSocket (Socket.IO).

## 📁 Architecture du Projet

```
Projet/
├── backend/         # API REST + WebSocket
│   ├── data/
│   ├── routes/
│   ├── websocket/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/        # Application React
│   ├── public/
│   ├── src/
│   ├── build/
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
├── db/
│   └── init.sql     # Base de données MariaDB
├── docker-compose.yml
└── README.md
```

## 🚀 Lancement avec Docker

### Prérequis
- Docker & Docker Compose

### Démarrage rapide

1. Copier `.env.example` en `.env` et adapter les variables (ports, DB, etc.)
2. Lancer la stack :
	```bash
	docker-compose up --build
	```
3. Accéder à l'app :
	- Frontend : [http://localhost:3000](http://localhost:3000)
	- Backend : [http://localhost:5000](http://localhost:5000)

### Détails Docker
- **backend/Dockerfile** : Node.js + Express + Socket.IO
- **frontend/Dockerfile** : Build React puis sert via Nginx
- **nginx.conf** : Proxy vers API backend
- **db/init.sql** : Script SQL pour MariaDB
- **docker-compose.yml** : Orchestration multi-conteneurs

## 📡 API Endpoints

| Méthode | Route                      | Description                           |
|---------|----------------------------|---------------------------------------|
| GET     | `/api`                     | Info de l'API                         |
| GET     | `/api/categories`          | Liste des catégories                  |
| GET     | `/api/categories/:id`      | Détail d'une catégorie                |
| GET     | `/api/questions/:categoryId` | Questions d'une catégorie (4 réponses aléatoires) |

## 🎮 Fonctionnalités

### Mode Solo
- Page d'accueil avec logo et titre
- Sélection de catégorie (15 catégories)
- Quiz de 20 questions chronométrées (30s)
- 4 propositions par question (parmi 10 possibles)
- Coloration verte/rouge selon la réponse
- Passage automatique si temps écoulé
- Score final avec récapitulatif

### Mode Multijoueur
- Créer ou rejoindre une room (code 6 caractères)
- Lobby en temps réel (jusqu'à 8 joueurs)
- Questions synchronisées pour tous les joueurs
- Timer partagé
- Scores en direct
- Classement final avec podium

### Autres nouveautés
- Architecture Docker complète (frontend, backend, DB)
- Ajout de 15 catégories (base SQL étendue)
- Synchronisation WebSocket améliorée
- Responsive mobile/tablette/desktop

## 🛠 Technologies

### Frontend
- React 18 (Create React App)
- React Router DOM
- React Context + useReducer
- Socket.IO Client
- Tailwind CSS
- Nginx (proxy)

### Backend
- Node.js + Express
- Socket.IO
- UUID
- CORS
- MariaDB

## 📱 Design

- Mobile-first
- Responsive
- Thème sombre avec accents violets
- Police : Poppins (Google Fonts)
- Animations fluides

## 👥 Catégories

1. 🏛️ Histoire
2. 🎬 Cinéma
3. ⚽ Sport
4. 🔬 Sciences
5. 🌍 Géographie
6. 🎵 Musique
7. 💻 Informatique
8. 📚 Littérature
9. 🎨 Art
10. 🍽️ Gastronomie
11. 🦁 Nature & Animaux
12. 🏺 Mythologie
13. 🎮 Jeux Vidéo
14. 🌌 Astronomie
15. 🗣️ Langues & Expressions


