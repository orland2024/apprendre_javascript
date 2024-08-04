
let Score = 1
let motMax = 3

function retournerMessage (score,motMax) {
    let message = "Mon score est de " + score + " sur " + motMax
    return message
}

retournerMessage (1,3)
console.log(retournerMessage);