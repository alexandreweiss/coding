const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = ["Je suis un cachalot", "Je suis un pétunia", "Je suis une serviette"];

function afficherResultat(score, nombreMots) {
    let pourcentage = (score / nombreMots) * 100;
    alert("Score : " + pourcentage + "%");
}

function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous choisir des phrases ou des mots ?");
    while (choix !== "phrases" && choix !== "mots") {
        alert("Veuillez choisir entre phrases ou mots");
        choix = prompt("Voulez-vous choisir des phrases ou des mots ?");
    }
    return choix;
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0;

    let compteur = 0;
    while (compteur < listePropositions.length) {
        let mot = prompt("Entrez le mot : " + listePropositions[compteur]);

        if (mot == listePropositions[compteur]) {
            score += 1;
        }
        compteur += 1;
    }
    return score;
}


function lancerJeu() {
    let resulatChoix = choisirPhrasesOuMots();
    let nbMotsProposes = 0;

    if (resulatChoix == "phrases") {
        let score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length;
    } else {
        let score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length;
    }

    afficherResultat(score, nbMotsProposes);

}

lancerJeu();