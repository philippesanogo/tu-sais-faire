const btn = document.querySelector('button');

// fonction nommée
/*function alerte() {
    alert("Réussi!")
}*/

// fonction fléchée
const alerte = () => {
    alert("Réussi avec la fonction flèchée!")
}

// déclenche l'evenement au clic du bouton
btn.addEventListener('click', alerte);