"use strict";

const input = document.querySelector("#input-todo");
const list = document.querySelector("#list");
const categories = document.querySelector("#category-container")
let taskname = "";


// console.log(input)


const taskCreator = (newtaskname) => {
  const htmlTask = `<li data-category="fun" data-done="false">
    ${newtaskname}
    <div class="button-done">❌</div>
  </li> `;
  list.insertAdjacentHTML("afterbegin", htmlTask);
  input.blur()
  input.value = ''
};

input.addEventListener("keyup", (e) => {
  input.addEventListener("input", () => {
    return input.value;
  });
  if (e.key === "Enter") {
    taskCreator(input.value);
  }
  
});

categories.addEventListener("click" , (e) => {
    //console.log(e.target.dataset)
    if (e.target !== e.currentTarget) {
        //console.log(e.target)
        //e.currentTarget.dataset.selected = false
       // e.target.dataset.selected = true

        changeSelection(e)
    }

})

const changeSelection = (e) => {
    if (e.target.dataset.selected){
        e.target.dataset.selected = true
        
    }

}