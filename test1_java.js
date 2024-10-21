// console.log("Quel est ton nom, intrépide aventurier ?")
// const name = readlineSync.question("Quel est ton nom, intrépide aventurier ?")
const nbcases = 25;
const plateau = createArrayWithNumbersFromRange(1,25);


// const userInput = prompt("Entrez votre prénom :");
// prompt("Vous avez entré : " + userInput);

function createArrayWithNumbersFromRange(start, end) {
  return [...Array(end - start + 1)].map((_, index) => start + index);
}
