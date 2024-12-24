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

const ami = ['Alex', 'Tibo', 'Martin', 'Titi', 'Romain', 'Alban'];
console.log(ami.length);

for (let compteur = 0; compteur < ami.length; compteur++) {
    console.log(ami[compteur]);
}

let compteur2 = 0
while (compteur2 < ami.length - 1) {
    compteur2++;
    log('While : ' + ami[compteur2]);
}

// create a conole logging function
function log(message) {
    console.log(`Ce message est issu de la fonction : ${message}`);
}