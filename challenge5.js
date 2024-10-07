const numbers = Object.freeze([3, 14, 15, 92, 65, 35, 89, 79, 32, 38]);

const n1 = (numbers) => console.log(numbers);

//number1(numbers)

const n2 = numbers.map((x) => x * 2);

console.log(n2);
