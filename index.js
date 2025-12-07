const express = require("express");
const path = require("path"); // 1. On importe l'outil "path" (chemin)

const app = express();

app.get("/", (req, res) => {
  // 2. Au lieu d'envoyer du texte, on envoie le fichier
  // __dirname veut dire "le dossier où je suis actuellement"
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
