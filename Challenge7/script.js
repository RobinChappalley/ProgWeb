"use strict";

const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
const secretNumber = randomNumber();
console.log(secretNumber);
document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;
  if (checkNumber()) {
    
  }
});

const checkNumber = () => {
  return document.querySelector("#guess").value == secretNumber;
};
