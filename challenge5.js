const numbers = Object.freeze([3, 14, 15, 92, 65, 35, 89, 79, 32, 38]);

const n1 = (numbers) => console.log(numbers);

//number1(numbers)

const n2 = numbers.map((x) => x * 2);

//console.log(n2);

const arrayOfAlters = [];
const n3 = numbers.forEach((x) => {
  if (x % 2 !== 0) {
    arrayOfAlters.push(x);
  }
});

//console.log(arrayOfAlters);

//const [jeveuxpas, ...n4] =  numbers

const omitsFirst = (arr) => {
  const [, ...wanted] = arr;
  return wanted;
};

//console.log(omitsFirst(numbers))

const omitsLast = (arr) => {
  return arr.slice(0, arr.length - 1);
};

//console.log(omitsLast(numbers))
const reduces = () => {
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
};

//console.log(reduces());

const highestValue = () => {
  let val = numbers[0];
  numbers.forEach((num) => {
    if (num > val) {
      val = num;
    }
  });
  return val;
};

//console.log(highestValue());

const contains9multiple = () => {
  return numbers.some((x) => x % 9 === 0);
};
//console.log(contains9multiple())

const sortsEvenAndOdd = () => {
  const even = numbers.filter((x) => x % 2 === 0);
  const odd = numbers.filter((x) => x % 2 !== 0);
  return [...even, ...odd];
};

//console.log(sortsEvenAndOdd());

// console.log(numbers.toSorted((a, b) => a - b))
// console.log(numbers.toSorted((a, b) => -a + b))

const containsR = () => {
  return strings.some((x) => x.includes("R"));
};
//console.log(containsR());

const isLongerThan5 = () => {
  return strings.some((x) => x.length > 5);
};

//console.log(isLongerThan5());

const addWord = () => {
  strings.push("Astra");
};

const upgradedStringsEarly = () => {
  return ["Astra", ...strings];
};

//console.log(upgradedStringsEarly());

const upgradedStringsLate = () => {
  return [...strings, "Astra"];
};

//console.log(upgradedStringsLate());

const replaceCentralWord = (arr) => {
  const newWord = "Radar";
  arr.splice(getMiddleIndex(arr), 1, newWord);
  return arr;
};

//const changedStrings = [...strings];
//console.log(replaceCentralWord(upgradedStringsEarly()));
//console.log(replaceCentralWord(changedStrings))

//console.log(concatedString())

const sortsAlphabeticalOrder = () => {
  changedStrings.sort((a, b) =>
    a.localeCompare(b, "fr", { sensitity: "base" })
  );
};
//sortsAlphabeticalOrder();
//console.log(changedStrings);

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

const getMiddleIndex = (arr) => {
  return Math.ceil(arr.length / 2) - 1;
};
const concatedString = () => {
  return strings.join("");
};

const identifiesIfPalindromic = () => {
  return concatedString().toLowerCase() === reverse(concatedString().toLowerCase())
};

//console.log(identifiesIfPalindromic());

function reverse(s) {
  for (var i = s.length - 1, o = ""; i >= 0; o += s[i--]) {}
  return o;
}

const circles = Object.freeze([
  { x: 20, y: 10, r: 10, color: "red" },
  { x: 10, y: 10, r: 20, color: "green" },
  { x: 30, y: 25, r: 15, color: "blue" },
  { x: 10, y: 5, r: 5, color: "red" },
]);
circles.forEach(Object.freeze);

const calculatesArea = () => {
  let areas = [];
  circles.forEach((circle) => {
    areas.push(Math.PI * circle.r ** 2);
  });
  return areas;
};

//console.log(calculatesArea());

const givesRedCircles = () => {
  let redCircles = [];
  circles.forEach((circle) => {
    if (circle.color === "red") {
      redCircles.push(circle);
    }
  });
  return redCircles;
};

//console.log(givesRedCircles())

const givesCenters = () => {
  let centers = [];
  circles.forEach((circle) => {
    centers.push({ x: circle.x, y: circle.y });
  });
  return centers;
};

//console.log(givesCenters())

const givesCirclesSlideRightby10 = () => {
  let liftUpCircles = [];
  circles.forEach((circle) => {
    let newCircle = Object.assign({}, circle);
    newCircle.x += 10;
    liftUpCircles.push(newCircle);
  });
  return liftUpCircles;
};

//console.log(givesCirclesSlideRightby10())

// CORRECTION
// // Tableaux de nombres 
// const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);
// console.log("Afficher tous les nombres dans la console");
// console.log(numbers);

// console.log("Retourner un tableau avec les valeurs doublées");
// const nbDouble = numbers.map(nb => nb * 2);
// console.log(nbDouble);

// console.log("Retourner un tableau ne contenant que les valeurs impairs");
// const odd = numbers.filter(nb => nb % 2); 
// console.log(odd);

// console.log("Retourner un tableau ne contenant pas le premier élément");
// const notFirstOne = numbers.slice(1);
// console.log(notFirstOne);

// console.log("Retourner un tableau ne contenant pas le dernier élément");
// const notLastone = numbers.slice(0, -1); 
// console.log(notLastone);

// console.log("Retourner la somme des nombres");
// const sum = numbers.reduce((acc, nb) => acc += nb);
// console.log(sum);

// console.log("Retourner le plus grand nombre");
// const max = Math.max(...numbers);
// console.log(max);

// console.log("Indiquer si le tableau contient au moins un nombre multiple de 9");
// const hasMulOf9 = numbers.some(nb => nb % 9 === 0);
// console.log(hasMulOf9);

// console.log("Indiquer si le tableau ne contient que des nombres positifs");
// const hasOnlyPositiv = numbers.every(nb => nb >= 0);
// console.log(hasOnlyPositiv);

// console.log("Retourner un tableau contenant les nombres pairs dans les premiers indices");
// console.log(" et les nombres impairs dans les indices restants");
// const even = numbers.filter(nb => nb % 2 === 0); 
// const evenOdd = [...even, ...odd];
// console.log(evenOdd);

// // Tableaux de chaînes de caractères
// const strings = Object.freeze(["Sator", "Arepo", " ", "Opera", "Rotas"]);
// console.log(strings);

// console.log("Retourner tous les mots contenant au moins un r");
// const wordWithRmin = strings.filter(word => word.indexOf("r") != -1);
// const wordWithRmaj = strings.filter(word => word.indexOf("R") != -1);
// const wordWithR = [...wordWithRmin, ...wordWithRmaj];
// console.log(wordWithR);

// console.log("Indiquer si tous les mots font 5 lettres");
// const isEveryWords5letters = strings.every((word) => word.length === 5);
// console.log(isEveryWords5letters);

// console.log("Retourner un tableau avec un mot de plus en début du tableau");
// const addWordBefore = ["first", ...strings];
// console.log(addWordBefore);

// console.log("Retourner un tableau avec un mot de plus en fin de tableau");
// const addWordAfter = [...strings, "last"];
// console.log(addWordAfter);

// console.log("Retourner un tableau en remplaçant le mot du milieu par le mot radar (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)");
// const middle = Math.round(strings.length/2);
// const replaceMiddle =[...strings.slice(0, middle-1), "radar", ...strings.slice(middle)];
// console.log(replaceMiddle);

// console.log("Retourner la concaténation de tous les mots");
// const concat = strings.join("");
// console.log(concat);

// console.log("Retourner le mot qui vient en premier selon l'ordre alphabétique");
// const firstByAlpha = [...strings].sort((w1, w2) => w1.localeCompare(w2)).shift();
// console.log(firstByAlpha);

// console.log("Indiquer si les chaines du tableau forment un palindrome (si elles sont lues dans l'ordre des indices du tableau).");
// const isPalindrome = str => {
//   const upperCase = str.toUpperCase();  
//   const reversed = upperCase.split("").reverse().join("");
//   return upperCase === reversed;
// }
// console.log(isPalindrome(concat));

// // Tableaux d'objets 
// const circles = Object.freeze([
//   {x: 20, y: 10 , r: 10, color: "red"},
//   {x: 10, y: 10 , r: 20, color: "green"},
//   {x: 30, y: 25 , r: 15, color: "blue"},
//   {x: 10, y:5 , r: 5, color: "red"}
// ]);

// circles.forEach(Object.freeze);
// console.log(circles);

// console.log("Retourner toutes les aires des cercles");
// const surfaces = circles.map(c => Math.PI * c.r * c.r); 
// console.log(surfaces);

// console.log("Retourner tous les cercles de couleur rouge");
// const redOnes = circles.filter(c => c.color === "red");
// console.log(redOnes);        

// console.log("Retourner tous les centres des cercles");
// const centers = circles.map(c => ({x: c.x, y: c.y}));
// console.log(centers);

// console.log("Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses");
// const clones = circles.map(c => {
//   const clone = {...c};
//   clone.x += 10;
//   return clone;
// });
// // version sur une ligne:
// //let clones = circles.map(c => ({x: c.x + 10, y: c.y, r: c.r, color: c.color}));
// console.log(clones);