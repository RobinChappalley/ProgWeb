"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");
const categories = document.querySelector("#category-container");
const eraseButtons = document.querySelectorAll(".button-done");
let chosenCategory = null;
let taskname = "";

const taskCreator = (newtaskname) => {
  const htmlTask = `<li data-category="${chosenCategory}" data-done="false">
    ${newtaskname}
    <div class="button-done">❌</div>
  </li> `;
  list.insertAdjacentHTML("afterbegin", htmlTask);
  input.blur();
  input.value = "";
  //console.log(eraseButtons)
};

const changeSelection = (e) => {
  if (e.target.dataset.selected === "false") {
    for (const children of categories.children) {
      children.dataset.selected = false;
    }
    e.target.dataset.selected = true;
    chosenCategory = e.target.dataset.category;
  } else {
    e.target.dataset.selected = false;
  }
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

list.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    //toggle to switch state for tasks
    if (e.target.dataset.done === "true") {
      e.target.dataset.done = false;
    } else if (e.target.dataset.done === "false") {
      e.target.dataset.done = true;
    }
  }

  if (e.target.classList[0] === "button-done") {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  }
});
