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
    const [, ...wanted] = arr
    return wanted;
}

console.log(omitsFirst(numbers))

