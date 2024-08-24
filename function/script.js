
// let Score = 1
// let motMax = 3

// function retournerMessage () {
//     let message = "Mon score est de " + score + " sur " + motMax
//     return message
// }

// retournerMessage ()
// console.log(retournerMessage);

// let monNombre = 1
// // monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

// function afficheUnNombre() {
//     let monNombreLocal = 2
//    // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
//     console.log("Intérieur de la fonction : ")
//     console.log(monNombre) // monNombre est accessible
//     console.log(monNombreLocal) // monNombreLocal est accessible
//     return monNombreLocal
// }

// afficheUnNombre() 
// console.log("Extérieur de la fonction : ")
// console.log(monNombre) // monNombre est accessible
// console.log(monNombreLocal) // monNombreLocal n’est pas accesssible



// for (let i=0; i<100; i++) { 

//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log ("fiizzbuzz")
//     }  else if (i%3 === 0) {
//         console.log ("fizz")
//      } else if (i%5  === 0) {
//         console.log ("buzz")

//      } else {
//         console.log (i)
//      }

// }


// Écrivez un programme JavaScript qui affiche les nombres de 1 à 100. 
// Pour les multiples de 3, affichez "Fizz" au lieu du nombre et pour les multiples de 5, affichez "Buzz". 
// Pour les nombres qui sont des multiples de 3 et de 5, affichez "FizzBuzz".

// function calculerMultipledeDeTroisCinq () {

//     for (let i=0; i<100; i++) { 

//             if ( i % 3 === 0 && i % 5 === 0) {
//                 console.log ("fiizzbuzz")
//             }  else if (i%3 === 0) {
//                 console.log ("fizz")
//              } else if (i%5  === 0) {
//                 console.log ("buzz")
        
//              } else {
//                 console.log(i)
               
//              }
        
//         }


// }

// calculerMultipledeDeTroisCinq ()


// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un mot et vérifie si ce mot est un palindrome
// (c'est-à-dire qu'il se lit de la même façon à l'endroit et à l'envers).

// Etapes
// Saisir un mot et verifie si ce mot est un palindrome

// let motUser = prompt("Entrez un mot :" ) 
// let reverseMotUser = motUser.split("").reverse().join("")


// if ( motUser === reverseMotUser ) {
//     console.log (motUser + " C'est un palindrome ")

// } else {
//     console.log(motUser + " Il n'est pas un palindrome ")
// }


// Écrivez un programme JavaScript où l'utilisateur doit deviner un nombre compris entre 1 et 100. 
// Le programme doit donner des indices à l'utilisateur ("trop grand" ou "trop petit")
// jusqu'à ce qu'il devine le bon nombre.


// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir deux nombres et une opération (addition, soustraction, multiplication, division). 
// Le programme doit ensuite effectuer l'opération et afficher le résultat.

// Saisir un premier nombre à l'aide de la popup

// let saisirNumber1 = Number(prompt ("Saisir le premier nombre"))

// // Saisir un deuxième nombre à l'aide de la popup

// let saisirNumber2 = Number(prompt ("Saisir le deuxième nombre"))

// // Choisir une opération à l'aide de la popup

// let choix = prompt ("Choisir l'opération: (+,-,*,/)")

// let resultat;

// if (choix === "+") { 

// resultat = saisirNumber1 + saisirNumber2

// } else if (choix === "-") {

//     resultat = saisirNumber1 - saisirNumber2

// } else if (choix === "*") {

//     resultat = saisirNumber1 * saisirNumber2

// }  else if (choix === "/") {

//     resultat = saisirNumber1 / saisirNumber2

// } else {

//     "Opération invalide"
// }

// console.log (resultat)

   
// var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100

// // console.log("(La solution est " + solution + ")");

// let devine 

// while (devine !== solution){
//     devine = Math.round(prompt("devinez le nombre"))

//     if(devine > solution){
//         console.log("trop grand");
//     }else if (devine < solution){
//         console.log("trop petit");
//     }break;
    
// }

var choixOrdi = Math.floor((Math.random() * 10) + 1),
    choixUtilisateur;
 
console.log(choixOrdi);
 
var fin = true;
choixUtilisateur = prompt("choisissez un nombre entre 0 et 10");
 
// Pas besoin d'un booléen, on met la condition directement dans le while
while (choixOrdi != choixUtilisateur) {
 
    // Si il n'y a qu'une seule instruction, on peut omettre les accolades {}
 
    if (choixUtilisateur < choixOrdi)
        console.log("plus grand");
    else
        console.log("plus petit");
 
    choixUtilisateur = prompt("choisissez un nombre entre 0 et 10");
}
 
// Ce message ne s'affichera seulement si le choixUtilisateur == choixOrdi (boucle while vérifiée)
console.log("vous avez trouvé le bon chiffre bravo !"); 

        
    
