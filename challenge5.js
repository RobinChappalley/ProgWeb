const numbers = [123, 4556, 789];

numbers.forEach((number) => {
  console.log(`${number} is a beautiful number`);
});

const doubledNumbers =
 numbers.map((number) => number * 2);

 console.log(doubledNumbers)
 console.log(numbers);

  console.log(numbers.filter((number)=> number < 500))