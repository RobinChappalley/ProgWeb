"use strict";

// **À IMPLEMENTER**
// Devrait permettre de regarder si l'utilisateur est authentifié
const isAuthenticated = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
};

// Affiche un message à l'utilisateur.
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message; // Sélectionne l'élément de message et met à jour son texte.
};

// Gère l'affichage des éléments de l'interface en fonction de l'état d'authentification.
const handleInterfaceAuth = () => {
  const auth = isAuthenticated(); // Vérifie si l'utilisateur est authentifié.
  document
    .querySelectorAll(".requires-auth")
    .forEach((el) => el.classList.toggle("hidden", !auth)); // Cache ou montre les éléments nécessitant une authentification.
  document
    .querySelectorAll(".requires-unauth")
    .forEach((el) => el.classList.toggle("hidden", auth)); // Cache ou montre les éléments ne nécessitant pas d'authentification.
};

// Basculer entre les formulaires de connexion et d'inscription.
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

// **À COMPLETER**
// Initialisation de la page
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
};

// **À COMPLETER**

async function user(data, val) {
  const response = await fetch(
    `https://progweb-todo-api.onrender.com/users/${val}`,
    requestInfo(data)
  );
  const datas = await response.json();
  displayMessage(datas.message);
  return datas;
}

async function setToken(data) {
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
}
const requestInfo = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
const getFormData = (e) => {
  const t = Object.fromEntries(new FormData(e));
  e.reset();
  return t;
};

const pageLoad = () => {
  handleInterfaceAuth();
  initEventListeners();
};
pageLoad();
