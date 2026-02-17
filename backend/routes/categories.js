const express = require("express");
const router = express.Router();
const { pool } = require("../db");

// GET /api/categories - Récupérer toutes les catégories
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categories ORDER BY id");
    res.json(rows);
  } catch (err) {
    console.error("Erreur récupération catégories:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /api/categories/:id - Récupérer une catégorie par ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [
      parseInt(req.params.id),
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Erreur récupération catégorie:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
