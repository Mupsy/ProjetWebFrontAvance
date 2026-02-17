const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const { waitForDB } = require("./db");

const categoryRoutes = require("./routes/categories");
const questionRoutes = require("./routes/questions");
const { setupWebSocket } = require("./websocket/gameManager");

const app = express();
const server = http.createServer(app);

// Configuration CORS — accepter toute origin (LAN / Tailscale)
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Routes API REST
app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);

// Route de base
app.get("/api", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API Culture Quiz !",
    endpoints: {
      categories: "/api/categories",
      questionsByCategory: "/api/questions/:categoryId",
    },
  });
});

// Configuration Socket.IO pour le multijoueur
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
  },
});

// Initialiser le gestionnaire WebSocket
setupWebSocket(io);

const PORT = process.env.PORT || 5000;

// Attendre MariaDB puis démarrer le serveur
async function start() {
  try {
    await waitForDB();
    server.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Serveur Culture Quiz démarré sur le port ${PORT}`);
      console.log(`📡 API REST: http://localhost:${PORT}/api`);
      console.log(`🔌 WebSocket: ws://localhost:${PORT}`);
      console.log(`🌐 Accessible sur le réseau (LAN/Tailscale) sur le port ${PORT}`);
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

start();
