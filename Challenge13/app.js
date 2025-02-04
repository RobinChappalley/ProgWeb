"use strict";
const isAuthenticated = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message; // Sélectionne l'élément de message et met à jour son texte.
};
const handleInterfaceAuth = () => {
  const auth = isAuthenticated(); // Vérifie si l'utilisateur est authentifié.
  document
    .querySelectorAll(".requires-auth")
    .forEach((el) => el.classList.toggle("hidden", !auth)); // Cache ou montre les éléments nécessitant une authentification.
  document
    .querySelectorAll(".requires-unauth")
    .forEach((el) => el.classList.toggle("hidden", auth)); // Cache ou montre les éléments ne nécessitant pas d'authentification.
  if (auth) getTasks().then((data) => displayTasks(data));
};
const toggleForm = (formName) => {
  document
    .querySelectorAll("form")
    .forEach((form) => form.classList.remove("active")); // Désactive tous les formulaires.
  document.querySelector(`form[name='${formName}']`).classList.add("active"); // Active le formulaire spécifié.

  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active")); // Désactive tous les onglets.
  document.querySelector(`.tab#${formName}`).classList.add("active"); // Active l'onglet spécifié.
};
const initEventListeners = () => {
  document.querySelector(".tab-container").addEventListener("click", (e) => {
    // Gère les clics sur les onglets.
    if (e.target.classList.contains("tab")) {
      toggleForm(e.target.id); // Bascule le formulaire actif en fonction de l'onglet cliqué.
    }
  });
  document
    .querySelector('form[name="signup"]')
    .addEventListener("submit", (e) => {
      e.preventDefault();
      user(getFormData(e.target), "");
    });
  document
    .querySelector('form[name="login"]')
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const datas = await user(getFormData(e.target), "login");
      setToken(datas);
      handleInterfaceAuth();
    });
  document
    .querySelector(`button[name="logout"`)
    .addEventListener("click", (e) => {
      if (unsetToken()) {
        handleInterfaceAuth();
      }
    });
  document
    .querySelector('form[name="todo"]')
    .addEventListener("submit", (e) => {
      e.preventDefault();
      addTask(getFormData(e.target));
    });
  if (isAuthenticated()) {
    document.querySelector(`ul`).addEventListener("click", async (e) => {
      if (e.target.classList.contains("delete")) {
        deleteTask(e.target.parentElement.classList[0]);
        e.target.parentElement.remove();
      }
    });
  }
};
function requestInfo(data, token = null, method) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const request = {
    method: method,
    headers: headers,
  };
  if (request.method !== "GET") {
    request.body = JSON.stringify(data);
  }
  console.log(request);
  return request;
}
async function user(data, val) {
  const response = await fetch(
    `https://progweb-todo-api.onrender.com/users/${val}`,
    requestInfo(
      data,
      val === "login" ? localStorage.getItem("token") : null,
      val === "login" ? "GET" : "POST"
    )
  );
  const datas = await response.json();
  console.log(datas);
  displayMessage(datas.message);
  return datas;
}
function setToken(data) {
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
}
const unsetToken = () => {
  localStorage.removeItem("token");
  return true;
};
const getFormData = (e) => {
  const t = Object.fromEntries(new FormData(e));
  e.reset();
  return t;
};
async function addTask(taskinfos) {
  const response = await fetch(
    `https://progweb-todo-api.onrender.com/todos`,
    requestInfo(taskinfos, localStorage.getItem("token"), "POST")
  );
  const data = await response.json();
  displayMessage(data.message);
  handleInterfaceAuth();
}
async function getTasks() {
  const response = await fetch(
    `https://progweb-todo-api.onrender.com/todos`,
    requestInfo(null, localStorage.getItem("token"), "GET")
  );
  const todoTable = await response.json();
  return todoTable;
}
async function displayTasks(taskinfos) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (const task of taskinfos.todos) {
    const element = ul.appendChild(document.createElement("li"));
    element.classList.add(task.id);
    const body = element.appendChild(document.createElement("p"));
    body.textContent = task.body;
    body.classList.add("body");
    const tag = element.appendChild(document.createElement("p"));
    tag.textContent = task.tags;
    tag.classList.add("tags");
    const deleteCross = element.appendChild(document.createElement("div"));
    deleteCross.classList.add("delete");
  }
}
async function deleteTask(taskid) {
  const response = await fetch(
    `https://progweb-todo-api.onrender.com/todos/${taskid}`,
    requestInfo(null, localStorage.getItem("token"), "DELETE")
  );
  const data = await response.json();
  displayMessage(data.message);
  return data;
}
const pageLoad = () => {
  handleInterfaceAuth();
  initEventListeners();
};
pageLoad();
