const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "quizuser",
  password: process.env.DB_PASSWORD || "quizpass",
  database: process.env.DB_NAME || "culture_quiz",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function waitForDB(retries = 20, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      const conn = await pool.getConnection();
      console.log("✅ Connexion à MariaDB réussie !");
      conn.release();
      return true;
    } catch (err) {
      console.log(
        `⏳ Attente MariaDB... tentative ${i + 1}/${retries} (${err.message})`
      );
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("❌ Impossible de se connecter à MariaDB après plusieurs tentatives");
}

module.exports = { pool, waitForDB };
