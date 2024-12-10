
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    // Deuxieme formulaire : formulaire d'incription
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Premier formulaire : formulaire de connexion
    const mailConnexion = document.getElementById('email').value;
    const passwordConnexion = document.getElementById('passwordConnexion').value;

    if (nom === " " || prenom === " " || mail === " " || password === " " || confirmPassword === " ") {
        alert("Vos champs doivent être remplie !");
        event.preventDefault();
    }
        
    if (password !== confirmPassword) { // Vérifie que les mots de passe sont les mêmes
        alert('Les mots de passe ne correspondent pas.');
        event.preventDefault(); // Empêche l'envoi du formulaire
    }

    if (mailConnexion === " " || passwordConnexion === " ") {
        alert("Les champs ne doivent pas être vide !");
        event.preventDefault();
    }


});