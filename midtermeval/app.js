"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");
let taskname = "";

// console.log(input)
console.log(list);

const taskCreator = (newtaskname) => {
  const htmlTask = `<li data-category="fun" data-done="false">
    ${newtaskname}
    <div class="button-done">❌</div>
  </li> `;
  list.insertAdjacentHTML("afterbegin", htmlTask);
};

input.addEventListener("keyup", (e) => {
  input.addEventListener("input", () => {
    return input.value;
  });
  if (e.key === "Enter") {
    taskCreator(input.value);
  }
});
