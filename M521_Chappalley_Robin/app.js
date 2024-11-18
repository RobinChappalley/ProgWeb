"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");
const categories = document.querySelector("#category-container");
const eraseButtons = document.querySelectorAll(".button-done");
let chosenCategory = null;
let taskname = "";

const taskCreator = (newtaskname) => {
    //create the new element and add it
    //then remove focus and empties input field
  const htmlTask = `<li data-category="${chosenCategory}" data-done="false">
    ${newtaskname}
    <div class="button-done">❌</div>
  </li> `;
  list.insertAdjacentHTML("afterbegin", htmlTask);
  input.blur();
  input.value = "";
};

const changeSelection = (e) => {
    //switches categories to accept only one possiblity
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
    //gets input and creates a task
  input.addEventListener("input", () => {
    return input.value;
  });
  if (e.key === "Enter") {
    taskCreator(input.value);
  }
});

categories.addEventListener("click", (e) => {
    // ensure that nothing happens when you click between categories
    //
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

  //remove tasks
  if (e.target.classList[0] === "button-done") {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  }
});
