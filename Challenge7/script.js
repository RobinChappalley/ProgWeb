"use strict";

const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;
});
