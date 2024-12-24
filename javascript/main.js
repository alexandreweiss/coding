console.log("Hello, World!");

let listMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

let mot = prompt("Entrez un mot : ");

if (listMots.includes(mot)) {
    score++;
    console.log("Bravo ! Votre score est de " + score);
}
else {
    console.log("Dommage !");
}
