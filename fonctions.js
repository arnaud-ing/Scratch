// Sélectionne le titre par son ID
const titre = document.getElementById("couleur");
const couleurs = ["red", "blue", "green", "purple", "orange", "pink"];
let indexCouleur = 0;

// Change la couleur du titre toutes les 1 seconde en boucle
setInterval(() => {
  titre.style.color = couleurs[indexCouleur];
  indexCouleur = (indexCouleur + 1) % couleurs.length;
}, 2000);


console.log("Hello world!");
