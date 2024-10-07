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

console.log(numbers.toSorted((a, b) => a - b))
console.log(numbers.toSorted((a, b) => -a + b))
