"use strict";
const request = new XMLHttpRequest();
const container = document.querySelector("#board");
const input = document.querySelector("#input-station");

// Add input field for selecting a new station
const addInput = () => {
  const label = document.createElement("label");
  label.textContent = "Nouvelle station :";
  container.insertAdjacentElement("beforebegin", label);

  const inputfield = document.createElement("input");
  inputfield.id = "input-station";
  inputfield.type = "text";
  inputfield.placeholder = "Select a new station";

  container.insertAdjacentElement("beforebegin", inputfield);

  const button = document.createElement("button");
  button.textContent = "Prendre le train";
  container.insertAdjacentElement("beforebegin", button);
};

addInput();
const button = document.querySelector("button");
const getStation = (input) => {
  const station = input ? input.value : "Yverdon-les-bains";
  request.open(
    "GET",
    `http://transport.opendata.ch/v1/stationboard?station=${station}&limit=5`
  );

  console.log(station);
  request.send();
  request.addEventListener("load", () => {
    const response = JSON.parse(request.response);
    print(response.stationboard);
  });
};

getStation();
const print = (train) => {
  //container.innerHTML = ""; // Clear previous results
  // if (train.length === 0) {
  //   container.textContent = "Aucun train disponible pour cette station";
  //   return;
  // }
  train.forEach((t) => {
    const departureTime = new Date(t.stop.departure);
    const hours = departureTime.getHours().toString().padStart(2, "0");
    const minutes = departureTime.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    const html = `<article>
                  <div class="time">${formattedTime}</div>
                  <div class="category" data-category="${t.category}">${t.category}</div>
                  <div class="destination">${t.to}</div>
              </article>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

button.addEventListener("click", () => {
    console.log(input);
  });
