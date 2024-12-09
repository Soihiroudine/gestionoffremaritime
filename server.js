// On importe le module http
const http = require("http");

// On importe le fichier app.js
const app = require("./app.js");

// On créer un port avec pour valeur 3010
const PORT = 3010;

// On modifie le port de l'application avec la valeur du PORT
app.set("port", PORT);

// Déclaration du serveur en utilisant http
const server = http.createServer(app);

// Recuperer l'heure
const date = new Date();
const heure = (date.getHours() < 10) ? "0" + date.getHours(): date.getHours();
const minute = (date.getMinutes() < 10) ? "0"+date.getMinutes(): date.getMinutes();
// const seconde = (date.getSeconds() < 10) ? "0"+date.getSeconds(): date.getSeconds();

// On ouvre le serveur
server.listen(PORT, () =>{
    // Afficher l'heure
    console.log(`${heure}h${minute} - Le serveur est lancé au port : ${PORT}`);
});
