"use strict";

const MAX_VALUE = 20

const randomNumber = (maxval) => {
  return Math.floor(Math.random() * maxval) + 1;
};
const highestScore = document.querySelector("#highscore");

let secretNumber = randomNumber(MAX_VALUE);

//vérifie la validité de l'entrée usr
document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;

  if (checkValidity(MAX_VALUE)) {
    if (checkNumber()) {
      document.querySelector("#answer").textContent = secretNumber;
      document.querySelector("#hint").textContent = "Correct number!";
      setshighscore();
      document.body.style.backgroundColor = "var(--color-tertiary)";
      document.querySelector("#answer").classList.add("correct")
    } else {
      document.querySelector("#hint").textContent = `${
        checkHeight() ? "📈Too high" : "📉Too low"
      }`;
    }
  }
});

//reset
document.querySelector("#again").addEventListener("click", () => {
  document.querySelector("#guess").value = null;
  document.querySelector("#hint").textContent = "Start guessing...";
  document.querySelector("#score").textContent = MAX_VALUE;
  document.body.style.backgroundColor = "var(--color-primary)";
  document.querySelector("#answer").textContent = "?";
  secretNumber = randomNumber();
  document.querySelector("#answer").classList.remove("correct")
});

const checkNumber = () => {
  return document.querySelector("#guess").value == secretNumber;
};
const checkValidity = (maxval) => {
  if (
    isNaN(document.querySelector("#guess").value) ||
    document.querySelector("#guess").value < 1 ||
    document.querySelector("#guess").value > maxval
  ) {
    document.querySelector("#hint").textContent =
      "Guess must be between 1 and 20 !";
    return false;
  } else {
    return true;
  }
};


const checkHeight = () => {
  return document.querySelector("#guess").value > secretNumber;
};
const setshighscore = () => {
  if (
    document.querySelector("#score").textContent >
    document.querySelector("#highscore").textContent
  ) {
    highestScore.textContent = document.querySelector("#score").textContent;
  }
};
