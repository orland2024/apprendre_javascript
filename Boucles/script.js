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



// const listMots = ["MBOUMBA","CINDY","PRINCESSE","CHANCELLE"]
// const listPhrases = ["Pas de panique ! "," La vie, l’univers et le reste "," Merci pour le poisson"]

// let score = 0

// let choix = prompt ("Veuillez choisir la liste: " + listMots + listPhrases )
// while (choix !== listMots && choix !== listPhrases) {
//     choix = prompt ("Veuillez choisir la liste: Mots ou Phrases")
// }

// if (choix !== listMots) {
// for (let i = 0; i < listMots.length; i++) {

// let motUzer = prompt ("Entrez le mot ici: " + listMots[i])
// if (motUzer === listMots[i]) {

//   score++
// }

// console.log(score)

// }

// } else {

// if (choix !== listPhrases) 
// for (let i=0; i < listPhrases.length; i++ ) {

// let frazUser = prompt ("Entrez la phrase :" + listPhrases[i])
// if (frazUser === listPhrases[i]) {

//   score++

// }

// }

// }

// console.log(score)

// let motUzer = prompt ("Ecrivez Cindy")
// while (motUzer !== "Cindy") {

//   motUzer = prompt ("Ecrivez Cindy")

  
// }

// console.log ("Vous avez réussi !")


// Déclaration des listes (tableaux) des mots et prhrases 
  
const motList = ["CMED","EZECHIEL37","EAGLE"]

const frazList =["Ressuscitez les morts !", "Guérissez les malades !", "Chassez les démons !"]

// Déclaration de la variable stockant le score

let scored = 0

// Déclaration de la variable stockants les valeurs insérées par l'utilisateur

let moUzer ;

// L'utilisateur doit faire le choix entre les "mots" ou les "prhrases"

let choix = prompt (" Veuillez saisir la liste des : mots ou phrases ")  

while (choix !== motList && choix !== frazList) {

  choix = prompt (" Veuillez saisir la liste des : mots ou phrases ")
}

if (choix === "mots") {

  for (let i = 0; i<motList.length; i++) {

     moUzer = prompt ("Entrez-le mot ici: " + motList[i])
  if (moUzer === motList[i]) {
      scored++
    } 
  }

  

} else {

  for (let i=0; i<frazList.length; i++) {

    moUzer = prompt ("Entrez-le mot ici: " + frazList[i])
  if (moUzer === frazList[i]) {
    scored++

   }


  }
  console.log ("Ton score est de : " + score + " sur " + frazList.length)
}