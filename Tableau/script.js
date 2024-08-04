let tableau0 = [0,1,2,3,4,5];
console.log(tableau0);

console.log(tableau0[0]);

let tableau1 = tableau0.length;
console.log(tableau1);

tableau0.push(6);
console.log(tableau0);

tableau0.pop();
console.log(tableau0);

let number = 25;
let number2 = number;
console.log(number);
console.log(number2);
number2 = 50;
console.log(number2);

let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1
let variableComplexe3 = [variableComplexe1];
variableComplexe2.push('poire')
variableComplexe1.push('mangue')
variableComplexe3.push('tomate')

// Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le
//contenu de la première a été changé aussi, parce que c’est le même contenu.

console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

let playlist = ["Yaweh","A toi la gloire","Nzebi bu bwe"];
console.log(playlist);


let totalMorceaux = playlist.length;
console.log(totalMorceaux);

playlist.push("Tu es ma vie","Seigneur Jésus");

console.log(playlist);

playlist.pop();
console.log(playlist);


let playlist1 = ["Rouah","Pneuma","Yeshua"] 

console.log(playlist1)

let totalMorceaux1 = playlist1.length

console.log(totalMorceaux1)

playlist1.push("Na Ndimi", "Hallelujah")

console.log(playlist1)

playlist1.pop()

console.log(playlist1)

let motUtilisateur = prompt ("Saisir dans cette zone :")

console.log(motUtilisateur)


