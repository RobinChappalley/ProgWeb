"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");
const categories = document.querySelector("#category-container");
let taskname = "";

// console.log(input)

const taskCreator = (newtaskname) => {
  const htmlTask = `<li data-category="${newtaskname}" data-done="false">
    ${newtaskname}
    <div class="button-done">❌</div>
  </li> `;
  list.insertAdjacentHTML("afterbegin", htmlTask);
  input.blur();
  input.value = "";
};

input.addEventListener("keyup", (e) => {
  input.addEventListener("input", () => {
    return input.value;
  });
  if (e.key === "Enter") {
    taskCreator(input.value);
  }
});

categories.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    changeSelection(e);
  }
});

const changeSelection = (e) => {
  if (e.target.dataset.selected) {
    e.target.dataset.selected = true;
  }
};

list.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    //toggle to switch state for tasks
    if (e.target.dataset.done === "true") {
      e.target.dataset.done = false;
    } else if (e.target.dataset.done === "false") {
      e.target.dataset.done = true;
    }
  }
});
