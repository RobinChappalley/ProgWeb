// console.log("Quel est ton nom, intrépide aventurier ?")
// const name = readlineSync.question("Quel est ton nom, intrépide aventurier ?")
const createArrayWithNumbersFromRange = (start, end) => {
  return [...Array(end - start + 1)].map((_, index) => start + index);
};
const nbcases = 25;
const plateau = createArrayWithNumbersFromRange(1, 25);
let caseActuelle = 1;

const userInput = prompt("Entrez votre prénom :");
prompt(`Bienvenue ${userInput}, c'est à toi de jouer !
    Lance ton dé et indique moi sa valeur`);

const jeu = () => {
  let win = false;
  do {
    const valeur = parseInt(prompt("Entrez la valeur de ton dé :"));
    if (valeur < 1 || valeur > 6) {
      alert("Valeur de dé non valide, veuillez réessayer");
    } else {
      caseActuelle = checkSpecialCases();
      
      if (caseActuelle > nbcases) {
        caseActuelle = nbcases - (caseActuelle - nbcases);
      }
    }
  } while (!win);
};

const movingCases = () => {
  const move = new Map();
  up.set(1, 9);
  up.set(4, 13);
  up.set(20, 22);
  up.set(8, 2);
  up.set(6, 5);
  up.set(19, 10);
  up.set(17, 7);
  up.set(24, 18);
  return move;
};
