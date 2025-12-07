const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // On envoie du HTML (Titre h1 + paragraphe)
  res.send('<h1>Bienvenue sur mon serveur !</h1><p>Ceci est ma première modification. Mais pas la dernière</p>'); 	
});

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});