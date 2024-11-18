const addTwo = (number) => number + 2;

//console.log(addTwo(10));

const pluralize = (word) => word + "s";

//console.log(pluralize("pizza"));

const map = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    result.push(fn(arr[i]));
    //console.log(result[i])
  }
  return result;
};

//console.log(map([19, 2, 5], addTwo));

const letters = ["a", "b", "c", "d"];

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

let alphabet = "";

forEach(letters, (char) => {
  alphabet += char;
});
console.log(alphabet);

const reduce = (arr, fn, initialvalue) => {
  let acc;
  if (initialvalue) {
    acc = initialvalue;
  } else {
    acc = arr[0];
    arr.shift();
  }

  arr.forEach(element=>{
    acc = fn(acc, element)
  })
  return acc;
};

console.log (reduce([1,2,3], addTwo, 0))


//CORRECTION
// "use strict";

// // Exercice 1
// const addTwo = (num) => num + 2;
// //// Test:
// // console.log(addTwo(3)) // -> 5
// // console.log(addTwo(10)) // -> 12

// // Exercice 2
// const addS = (word) => word + "s";
// //// Test:
// // console.log(pluralize("pizza")) // -> "pizzas"

// // Exercice 3
// const map = (array, callback) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i]));
//   }
//   return newArr;
// };
// //// Test:
// // console.log(map([1,2,3], addTwo)); // -> [3, 4, 5]

// // Exercice 4
// const forEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };
// //// Test:
// // let alphabet = "";
// // const letters = ["a", "b", "c", "d"];
// // forEach(letters, (char) => alphabet += char);
// // console.log(alphabet); // -> "abcd"

// // Exercice 5
// const reduce = (array, callback, initialValue) => {
//   let accum;
//   if (initialValue !== undefined) {
//     accum = initialValue;
//   } else {
//     accum = array[0];
//     array.shift();
//   }
//   forEach(array, (el) => (accum = callback(accum, el)));
//   return accum;
// };
// //// Test:
// // const nums = [4, 1, 3];
// // const add = (a, b) => a + b;
// // console.log(reduce(nums, add, 0)); // -> 8