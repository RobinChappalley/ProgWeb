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
  let firstHalf = string.slice(0, getMiddleIndex(string));
  console.log(firstHalf);
  let secondHalf = reverse(string.slice(getMiddleIndex(string) + 1));
  console.log(secondHalf);
  if (firstHalf === secondHalf) {
    isPalindromical = true;
  }
  return isPalindromical;
};

console.log(identifiesIfPalindromic(strings));


function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}
