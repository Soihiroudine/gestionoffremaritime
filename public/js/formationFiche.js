const ajouter = document.querySelector(".entree input[type='submit']");

ajouter.addEventListener("click", (event) => {
    const titreFormation = document.querySelector("#titreFormation").value;
    const detailFormation = document.querySelector("#detailFormation").value;
    const detailLieu = document.querySelector("input[name='detailLieu']:checked");

    if (titreFormation === " ") {
        alert("Le titre ne doit pas être nul !");
        event.preventDefault();
    }
});