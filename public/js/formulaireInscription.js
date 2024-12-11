
const form = document.querySelector('form');
const oeuilImage = document.querySelectorAll('.imgMotPasse');
const inputPassword = document.querySelectorAll(".motDePasse");

for (let index = 0; index < oeuilImage.length; index++) {
    console.log(oeuilImage[index].getAttribute("alt"));

    oeuilImage[index].addEventListener("click", () => {
        console.log(oeuilImage[index]);
        if (oeuilImage[index].getAttribute("alt") === "hide") {
            oeuilImage[index].setAttribute("src", "/images/passVisible.png");
            oeuilImage[index].setAttribute("alt", "visible");
            inputPassword[index].setAttribute("type", "text");
        }else {
            oeuilImage[index].setAttribute("src", "/images/passHide.png");
            oeuilImage[index].setAttribute("alt", "hide");
            inputPassword[index].setAttribute("type", "password"); 
        }
    });
    
}


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