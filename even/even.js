let monBouton =document.getElementById("monBouton")

let recupBalizDiv = document.querySelector(".conteneur")

let body = document.querySelector("body")

monBouton.style.background = "white"

let newBouton = document.createElement("button")
newBouton.classList.add("btn")
newBouton.innerHTML = `<p>cliquez sur Moi</p>`
recupBalizDiv.appendChild(newBouton)
newBouton.style.background = "yellow"
newBouton.style.height= "20px"

let newBaliz = document.createElement("div")
newBaliz.style.height = "120px"
newBaliz.style.weight = "120px"
newBaliz.style.background = "grey"
newBaliz.style.margin = "10px"
newBaliz.style.borderRadius = "5px"
newBaliz.style.textAlign = "center"

let bouton1 = document.createElement("button")
let link = document.createElement("a")
    link.innerText = "C'est mon lien"
    bouton1.appendChild(link)
    newBaliz.appendChild(bouton1)
    console.log(newBaliz)
    recupBalizDiv.appendChild(newBaliz)
    recupBalizDiv.style.padding = "10px"



    
    

   
    


