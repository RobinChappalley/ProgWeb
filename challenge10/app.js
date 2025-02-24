"use strict";

const weight = document.querySelector("input[name=weight]");
const textWeight = document.querySelector("span.weightLabel");
const size = document.querySelector("input[name=size]");
const textSize = document.querySelector("span.sizelabel");
const leading = document.querySelector("input[name=leading]");
const textLeading = document.querySelector("span.leadinglabel");
const output = document.querySelector(".output");
const fontStyle = document.querySelector("select[name=typeface]");
const italic = document.querySelector("input[type=checkbox]");
const colors = document.querySelector(".colors");
const inputText = document.querySelector("input[name=text]");
const defaultText = "The quick brown fox jumps on the lazy dog";
const settingsSaved = [];
const settingsContainer = document.querySelector(".settings-container");
const save = document.querySelector(".save");
let divcount = 0

//gère le cas où input est vide
function updateOutput() {
  if (!inputText.value || inputText.value === "") {
    output.value = defaultText;
  } else {
    output.value = inputText.value;
  }
}
const saver = () => {
  return {
    backgroundColor: output.style.backgroundColor,
    color: output.style.color,
    italic: italic.checked,
    leading: leading.value,
    size: size.value,
    text: output.value,
    typeface: fontStyle.value,
    weight: weight.value,
  };
};

// gère le cas où input est rempli
inputText.addEventListener("input", updateOutput);

//gère le cas où output est rempli
output.addEventListener("input", () => {
  inputText.value = output.value;
});

weight.addEventListener("input", () => {
  output.style.fontWeight = weight.value;
  textWeight.textContent = weight.value;
});

size.addEventListener("input", () => {
  output.style.fontSize = `${size.value}px`;
  textSize.textContent = `${size.value} px `;
});

leading.addEventListener("input", () => {
  output.style.lineHeight = leading.value;
  textLeading.textContent = leading.value;
});

fontStyle.addEventListener("change", () => {
  output.style.fontFamily = fontStyle.value;
});

italic.addEventListener("click", () => {
  italic.checked
    ? (output.style.fontStyle = "italic")
    : (output.style.fontStyle = "normal");
});

colors.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    output.style.backgroundColor = e.target.style.backgroundColor;
    output.style.color = e.target.style.color;
  }
});

save.addEventListener("click", () => {
  settingsSaved.push(saver());
  settingsCreator(saver());
});

const truncateString = (string = "", maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

const settingsCreator = (saved) => {
  const settingsHTML = `<div class="setting" 
  data-index="${divcount++}"
  style="background-color:${saved.backgroundColor};
  color:${saved.color};
  font-family:${saved.typeface};
  font-weight:${saved.weight};
  font-style:${saved.italic ? "italic" : "normal"};"
  >${truncateString(saved.text, 20)}</div>`;
  settingsContainer.insertAdjacentHTML("beforeend", settingsHTML);
};

settingsContainer.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    const choosedSetting = settingsSaved[e.target.dataset.index]
    output.value = choosedSetting.text;
    output.style.backgroundColor = choosedSetting.backgroundColor;
    output.style.color = choosedSetting.color;
    output.style.fontFamily = choosedSetting.typeface;
    output.style.fontWeight = choosedSetting.weight;
    output.style.leading = choosedSetting.leading
    output.style.fontSize = choosedSetting.size
    output.style.fontStyle = choosedSetting.italic? "italic" : "normal";
  }
})

// Créer un nouvel objet avec les paramètres actuels


// CORRECTION
// // Texte par défaut utilisé dans la sortie si aucun texte n'est saisi
// const defaultText = `The quick brown fox jumped on the lazy dog`;

// // Éléments d'entrée du DOM
// const textInput = document.querySelector("input[name='text']");        // Champ de saisie de texte
// const typefaceInput = document.querySelector("select[name='typeface']"); // Sélecteur de police
// const fontSizeInput = document.querySelector("input[name='size']");      // Champ de saisie de la taille de police
// const fontWeightInput = document.querySelector("input[name='weight']");  // Champ de saisie de l'épaisseur de la police
// const leadingInput = document.querySelector("input[name='leading']");    // Champ de saisie de l'interlignage
// const italicInput = document.querySelector("input[name='italic']");      // Case à cocher pour l'italique
// const colorsInput = document.querySelector(".colors");                   // Conteneur pour les options de couleurs

// // Éléments liés à la sauvegarde et à l'affichage des paramètres
// const saveButton = document.querySelector(".save");                       // Bouton de sauvegarde
// const SavedContainer = document.querySelector(".Saved-container");   // Conteneur pour les paramètres enregistrés
// const savedSaved = [];                                                 // Tableau pour stocker les paramètres enregistrés

// // Étiquettes pour afficher la taille de police, l'épaisseur et l'interlignage actuels
// const fontSizeLabel = document.querySelector(".sizelabel");
// const fontWeightLabel = document.querySelector(".weightlabel");
// const leadingLabel = document.querySelector(".leadinglabel");

// // Élément de sortie où le style et le texte seront affichés
// const output = document.querySelector(".output");

// // Objet contenant toutes les propriétés actuelles de la sortie
// let outputProps = {
//     text: defaultText,               // Texte initial
//     typeface: "Neue Montreal",       // Police par défaut
//     size: 64,                        // Taille de police par défaut
//     weight: 400,                     // Épaisseur de police par défaut
//     leading: 1.15,                   // Interlignage par défaut
//     italic: false,                   // Italique désactivé par défaut
//     background: "#2a2a2a",           // Couleur de fond par défaut
//     color: "#ffffff"                 // Couleur du texte par défaut
// }

// // Fonction pour mettre à jour le style de l'élément de sortie en fonction de outputProps
// const updateOutputInterface = () => {
//     output.value = outputProps.text;
//     output.style.fontFamily = outputProps.typeface;
//     output.style.fontSize = `${outputProps.size}px`;
//     output.style.fontWeight = outputProps.weight;
//     output.style.lineHeight = outputProps.leading;
//     output.style.fontStyle = outputProps.italic ? "italic" : "normal";
//     output.style.backgroundColor = outputProps.background;
//     output.style.color = outputProps.color;
// }

// // Fonction pour mettre à jour les champs et étiquettes de la barre latérale selon outputProps
// const updateSidebarInterface = () => {
//     textInput.value = outputProps.text;
//     fontSizeLabel.innerHTML = `${outputProps.size}px`;
//     fontWeightLabel.innerHTML = outputProps.weight;
//     leadingLabel.innerHTML = outputProps.leading;
// }

// // Écouteurs d'événements pour les changements dans les entrées, afin de mettre à jour outputProps et les interfaces

// // Gestionnaire d'événements pour le champ de saisie de texte
// textInput.addEventListener("input", e => {
//     if (!e.currentTarget.value) {
//         outputProps.text = defaultText;  // Revenir au texte par défaut si le champ est vide
//         updateOutputInterface();
//         return;
//     }
//     outputProps.text = e.currentTarget.value;
//     updateOutputInterface();
// });

// // Synchroniser la barre latérale lorsque le texte de la sortie est modifié
// output.addEventListener("input", e => {
//     outputProps.text = e.currentTarget.value;
//     updateSidebarInterface();
// });

// // Gestionnaire d'événements pour le sélecteur de police
// typefaceInput.addEventListener("input", e => {
//     outputProps.typeface = e.currentTarget.value;
//     updateOutputInterface();
// });

// // Gestionnaire d'événements pour la taille de police
// fontSizeInput.addEventListener("input", e => {
//     outputProps.size = e.currentTarget.value;
//     updateOutputInterface();
//     updateSidebarInterface();
// });

// // Gestionnaire d'événements pour l'épaisseur de police
// fontWeightInput.addEventListener("input", e => {
//     outputProps.weight = +e.currentTarget.value; // Conversion en nombre
//     updateOutputInterface();
//     updateSidebarInterface();
// });

// // Gestionnaire d'événements pour l'interlignage
// leadingInput.addEventListener("input", e => {
//     outputProps.leading = +e.currentTarget.value; // Conversion en nombre
//     updateOutputInterface();
//     updateSidebarInterface();
// });

// // Gestionnaire d'événements pour la case à cocher italique
// italicInput.addEventListener("change", e => {
//     outputProps.italic = e.currentTarget.checked; // Activer/désactiver l'italique
//     updateOutputInterface();
// });

// // Gestionnaire d'événements pour la sélection de couleur
// colorsInput.addEventListener("click", e => {
//     if (!e.target.classList.contains("color")) return;
//     outputProps.background = e.target.style.backgroundColor; // Définir la couleur de fond
//     outputProps.color = e.target.style.color;               // Définir la couleur du texte
//     updateOutputInterface();
// });

// // Fonction utilitaire pour tronquer le texte à afficher dans les paramètres enregistrés
// const truncateString = (string = "", maxLength = 30) =>
//     string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

// // Fonction pour enregistrer les paramètres actuels dans le tableau savedSaved
// const saveSetting = (setting) => {
//     savedSaved.unshift({ ...setting }); // Copier les paramètres actuels dans les paramètres enregistrés
//     return savedSaved;
// }

// // Fonction pour afficher tous les paramètres enregistrés dans SavedContainer
// const displaySaved = () => {
//     const settingElements = savedSaved.map((setting, index) => {
//         return `
//         <div class="setting" data-index=${index} style="background-color:${setting.background}; color: ${setting.color}; font-family:${setting.typeface}; font-weight: ${setting.weight}; font-style: ${setting.italic}">
// 	        ${truncateString(setting.text)}
//         </div>`
//     });
//     SavedContainer.innerHTML = settingElements.join(" ");
// }

// // Fonction pour récupérer un paramètre enregistré et l'appliquer à outputProps
// const retrieveSetting = (setting) => {
//     outputProps = setting;
//     updateOutputInterface();
//     updateSidebarInterface();
// }

// // Écouteur d'événements pour enregistrer les paramètres actuels
// saveButton.addEventListener("click", e => {
//     saveSetting(outputProps); // Enregistrer les paramètres actuels
//     displaySaved();        // Mettre à jour l'affichage des paramètres
// })

// // Écouteur d'événements pour récupérer et appliquer un paramètre enregistré au clic
// SavedContainer.addEventListener("click", e => {
//     if(!e.target.classList.contains("setting")) return;
//     const index = e.target.dataset.index;
//     outputProps = {...savedSaved[index]}; // Charger le paramètre sélectionné
//     updateOutputInterface();
//     updateSidebarInterface();
// });
