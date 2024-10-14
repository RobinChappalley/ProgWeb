"use strict";

const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
const secretNumber = randomNumber();
console.log(secretNumber);
document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;

  if (checkValidity()) {
    if (checkNumber()) {
    }
  }
});

const checkNumber = () => {
  return document.querySelector("#guess").value == secretNumber;
};
const checkValidity = () => {
  if (
    !document.querySelector("#guess").value ||
    document.querySelector("#guess").value < 1 ||
    document.querySelector("#guess").value > 20
  ) {
    document.querySelector("#hint").textContent =
      "Guess must be between 1 and 20 !";
  }
};
