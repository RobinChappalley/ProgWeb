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

const identifiesIfPalindromic = (arr) => {
  let isPalindromical = false;
  let string = concatedString().toLowerCase();
  let reversedString = reverse(string);
  return string === reversedString;
};

//console.log(identifiesIfPalindromic(strings));

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

const givesRedCircles = ()=>{
  let redCircles = [];
  circles.forEach((circle) => {
    if(circle.color === "red"){
      redCircles.push(circle);
      }
      });
      return redCircles;
}

//console.log(givesRedCircles())

const givesCenters = () =>{
  let centers = [];
  circles.forEach((circle) => {
    centers.push({x: circle.x, y: circle.y});
    });
    return centers;
}

//console.log(givesCenters())

