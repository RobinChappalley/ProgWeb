"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");

// console.log(input)
console.log(list);

const taskCreator = (e) => {
  console.log(e.key);
  const task = {
    text: input,
  };
};

input.addEventListener("keyup", (e) => {
  taskCreator(e);
});



