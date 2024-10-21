// console.log("Quel est ton nom, intrépide aventurier ?")
// const name = readlineSync.question("Quel est ton nom, intrépide aventurier ?")
const nbcases = 25;
const plateau = [].fill(0);

for (let index = 0; index < nbcases; index++) {
    plateau.fill(index)
    
}
//plateau.fill()
const userInput = prompt("Entrez votre prénom :");
prompt("Vous avez entré : " + userInput);

