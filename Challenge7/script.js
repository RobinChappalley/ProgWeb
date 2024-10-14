"use strict";

const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
const highestScore = document.querySelector("#highscore");
const secretNumber = randomNumber();
console.log(secretNumber);
document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;

  if (checkValidity()) {
    if (checkNumber()) {
      document.querySelector("#hint").textContent = "Correct number!";
      setshighscore();
    } else {
      document.querySelector("#hint").textContent = `${
        checkHeight() ? "📈Too high" : "📉Too low"
      }`;
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
