// const motApplication = "Bonjour";
// let motUtilisateur = prompt("Ecrivez votre mot " + motApplication);
// if (motApplication === motUtilisateur) {
//     console.log("Bravo")
// } else {
//     console.log("Vous avez fait une erreur de frappe ");
// }

/*switch (motUtilisateur) {
    case motApplication :
    console.log("Bravo !")
    break
    case "Gredin":
    console.log("Restez correct !")
    break
    case "Mécréant":
    console.log("Restez correct ! ")
    break
    case "Vilain":
    console.log("Soyez gentil !")
    break
    default:
    console.log("Vous avez fait une erreur de frappe.")


}*/

// let motTapeOk = false // Essayez de mettre false à la place de true
// if (motTapeOk) {
//  console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//  console.log("Échec, le mot n'est pas correct")
// }

// let motMenu = "*150#"
// let motUser = prompt ("Tapez le code du menu" + motMenu)

// if (motUser === motMenu){
//     alert ("Bienvenu sur Airtel money ")
// }

// let motTapeOK = false;
// if (motTapeOK) {
//     console.log ("Bravo,le mot tapé est correct");
// }else {
//     console.log ("Echec,le mot tapé n'est pas correct");
// }

// let motUse = prompt ("Entrez le mot :");
// console.log (motUse);

// const motApplication = "Bonjour";
// let motUse = prompt ("Entrez le mot :" + motApplication )
// if (motUse === motApplication ) {
//     console.log ("Bravo !")
// } else { console.log ("Vous avez fait une erreur de frappe.")

// }

//const motApplication = "Bonjour";
//let motUser = prompt ("Entrez le mot:" + motApplication);
// if (motUser === motApplication ) {
//     console.log ("Bravo !")
// } else {

// if (motUser === "Gredin") {
//     console.log ("Sois correct !")
// } else {
// if (motUser === "Mécréant") {
// console.log ("Sois correct !")
// } else {
// if (motUser === "Vilain") {
// console.log ("Sois gentil !")
// }
// }
// }
// }

/*switch (motUser) {
case motApplication:
console.log ("Bravo!")
break
case "Racca":
console.log ("Sois courtois !")
break
case "Idiot":
console.log ("Sois poli !") 
break  
case "Maboule":
console.log ("Sois pondéré !")
break
default: 
console.log ("Tu as commis une erreur de saisie de texte.")

}*/

/*let listMots = ["Cachalot" , "Pétunia", "Serviette"]

let score = 0

let motUtilisateur = prompt("Entrez un mot: " + listMots[0])
if ( motUtilisateur === listMots[0]) {

    score++
}


 motUtilisateur = prompt("Entrez un mot: " + listMots[1])
if ( motUtilisateur === listMots[1]) {

    score++
}

motUtilisateur = prompt("Entrez un mot: " + listMots[2])
if ( motUtilisateur === listMots[2]) {

    score++
}
console.log(score)*/

//ENTRAINEMENT

/*const motApplication1 = "ORLAND"
let motUtilisateur1 = prompt("Saisir ici: "+ motApplication1 )
if (motUtilisateur1 === motApplication1 ) {
    console.log("Parfait")
} else {
    console.log("Echec, essaie encore")
}*/

/*let motTapeOK = false
if (motTapeOK) {
    console.log("Félicitation !")
}else{
    console.log("Reprends !")
}*/

/*let motComputer = "CINDY";
let motUzer = prompt(
  "Veuillez saisir dans la zone de saisie ci-dessous " + motComputer
);
if (motUzer === motComputer) {
  console.log("Congratulations !!!");
} else {
  if (motUzer === "Racca") {
    console.log("Soyez poli !");
  } else {
    if (motUzer === "Injure") {
      console.log("Soyez courtois !");
    } else {
      if (motUzer === "Insulte") {
        console.log("Sachez que les injures n'ont pas droit de cité ici !");
      } else {
        console.log("Erreur");
      }
    }
  }
}*/

/*const motComputer = "CHANCELLE"
let motUzer = prompt ("Zone de saisie " + motComputer)

switch (motUzer) {

case motComputer :
    console.log ("Félicitations !!! ")
    break
case "Racca" :
    console.log ("Soyez poli !")
    break
case "Injure" :
    console.log ("Soyez courtois !")
    break
case "Insulte" :
    console.log ("Sachez que les injures n'ont pas droit de cité ici !")
    break
default :
console.log ("Erreur")
}*/

/*PREMIERE METHODE*/

/*const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUser = prompt ("Zone de saisie : " + listeMots[0])

if (motUser === listeMots[0] ) {

    score++
}
    motUser = prompt ("Zone de saisie : " + listeMots[1]) 

    if (motUser === listeMots[1]) {
        score++
    }

motUser = prompt ("Zone de saisie : " + listeMots[2])

if (motUser === listeMots[2]) {

    score++
}

console.log (score)*/

/*DEUXIEME METHODE*/

const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUser = prompt ("Zone de vérité :" + listeMots[0])

switch (motUser) { 

case listeMots[0]: 
    score++
    

    motUser = prompt ("Zone de vérité :" + listeMots[1])
case listeMots[1]:
    score++
    
    
    motUser = prompt ("Zone de vérité :" + listeMots[2])
case listeMots[2]:
    score++
     
console.log (score)
    
}
