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
