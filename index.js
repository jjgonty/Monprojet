const express = require("express");
const path = require("path");
const app = express();

// --- LIGNE À AJOUTER ---
// Cela dit à Express : "Sers tous les fichiers statiques (CSS, images) qui sont dans le dossier actuel"
app.use(express.static(__dirname));
// -----------------------

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
