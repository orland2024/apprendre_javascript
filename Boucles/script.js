//Déclarer les tableaux
//let listMots = ["Cachalot", "Pétunia", "Serviette"];
// let listPhrases = ["Pas de panique!","La vie,l’univers et le reste", "Merci pour le poisson"]
//Déclarer la variable score
//let score = 0;
//Déclarer la variable utilisateur

//Déclarer la boucle for
// for (let i = 0; i < listMots.length; i++) {
//   let motUser = prompt("Entrez un mot:" + listMots[i]);
//   if (motUser === listMots[i]) score++;
// }

// console.log("ton score est"+ score)

//ENTRAINEMENT BOUCLE FOR

// for (let i = 0; i<3; i++) {

//   console.log (i)
// }

//ENTRAINEMENT BOUCLE WHILE

// let i = 0

// while (i<3) {
//   i++
//   console.log(i)
// }

// let mot = prompt ("Ecrivez OK:")
//     while (mot !== "OK") {
//       mot = prompt ("Ecrivez OK:")

//     }
//     console.log ("Vous avez écrit OK")

//DECLARER DES MOTS

// const listMots = ["MBOUMBA","CINDY","PRINCESSE","CHANCELLE"]

// let score = 0

// for (let i = 0; i < listMots.length; i++) {

// let motUser = prompt ("Entrez le mot :" + listMots[i])

// if (motUser === listMots[i]) {

//     score++
// }

// }

//console.log("Ton score est de " + score +  " sur " + listMots.length  )

// DECLARER DES PRHASES

// const listPhrases = ["Pas de panique ! "," La vie, l’univers et le reste "," Merci pour le poisson"]

// let score = 0;

// for (let i = 0; i < listPhrases.length; i++) {
    
//   let frazUser = prompt ("Entrez la phrase : " + listPhrases[i]);

//   if (frazUser === listPhrases[i]) {
    
//       score++
//   }

//     console.log(score)
// }



const listMots = ["MBOUMBA","CINDY","PRINCESSE","CHANCELLE"]
const listPhrases = ["Pas de panique ! "," La vie, l’univers et le reste "," Merci pour le poisson"]

let score = 0

let choix = prompt ("Veuillez choisir la liste: " + listMots + listPhrases )
while (choix !== listMots && choix !== listPhrases) {
    choix = prompt ("Veuillez choisir la liste: Mots ou Phrases")
}

if (choix !== listMots) {
for (let i = 0; i < listMots.length; i++) {

let motUzer = prompt ("Entrez le mot ici: " + listMots[i])
if (motUzer === listMots[i]) {

  score++
}

console.log(score)

}

} else {

if (choix !== listPhrases) 
for (let i=0; i < listPhrases.length; i++ ) {

let frazUser = prompt ("Entrez la phrase :" + listPhrases[i])
if (frazUser === listPhrases[i]) {

  score++

}

}

}

console.log(score)
