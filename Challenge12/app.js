"use strict";

// Demande au navigateur de détecter la position actuelle de l'utilisateur et retourne une Promise
const getCoordinates = () => {
  return new Promise((res, rej) =>
    navigator.geolocation.getCurrentPosition(res, rej)
  );
};

getCoordinates();

// getPosition()
// Résout la promesse de getCoordinates et retourne un objet {lat: x, long: y}
const getPosition = async () => {
  const position = await getCoordinates();
  return {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
};

// renderWeather(min, max)
// Affiche la valeur des deux paramêtres dans le widget de météo
const renderWeather = (min, max) => {
  document.querySelector(".min").textContent = `${min}°C`;
  document.querySelector(".max").textContent = `${max}°C`;
  return;
};

// parseStationData(rawData)
// Reçoit la réponse JSON de l'API Transport/stationboard et recrache un objet
// ne contenant que les informations pertinentes.
const parseStationData = (rawData) => {
  const { stationboard } = rawData;
  const departures = stationboard.map((el) => {
    const date = new Date(el.stop.departure);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = date.getHours() < 10 ? "0" + hours : hours;
    const formattedMinutes = date.getMinutes() < 10 ? "0" + minutes : minutes;
    return {
      departure: `${formattedHours}:${formattedMinutes}`,
      destination: el.to,
      category: el.category,
    };
  });
  return {
    station: rawData.station.name,
    departures,
  };
};

// Affiche une ligne de départ dans le widget CFF.
const renderTrain = (train) => {
  const board = document.querySelector(".departures");
  const html = `
    <article>
        <div class="time">${train.departure}</div>
        <div class="category" data-category="${train.category}">${train.category}</div>
        <div class="destination">${train.destination}</div>
    </article>
    `;
  board.insertAdjacentHTML("beforeend", html);
  return;
};

// Affiche le mot passé en paramettre dans le widget CFF.
const renderStationName = (station) => {
  const stationElement = document.querySelector(".departures header p");
  stationElement.textContent = station;
};

// Votre code peut se trouver dans cette fonction. L'appel vers getPosition est
// déjà implémenté. Si vous jetez un coup d'oeil à votre console vous verrez un objet
// contenant votre position.
const getDashboardInformation = () => {
  getPosition().then((res) => {
    console.log(res);
    const url = `http://transport.opendata.ch/v1/locations?x=${res.lat}&y=${res.long}`;
    fetch(url).then((response) => response.json());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let station;
        data.stations.forEach((el) => {
          if (checkIfTrainStation(el)) {
            station = el;
            renderStationName(el.name);
          }
        });
        //récupère les données pour afficher les prochains trains dans la gare
        fetch(
          `http://transport.opendata.ch/v1/stationboard?station=${station.name}&limit=10`
        )
          .then((informations) => {
            return informations.json();
          })
          .then((data) => {
            const parsed = parseStationData(data);
            console.log(parsed.departures);
            parsed.departures.forEach((el) => {
              renderTrain(el);
            });
          });
      })
      .catch(() => {
        console.error("Erreur lors de l'appel à l'API");
        document.querySelector("header p").textContent =
          "Pas de station de train";
      });
      console.log(res);

  })
};
// Fonction qui vérifie si une station est une gare de train.
const checkIfTrainStation = (station) => {
  return station.icon === "train";
};

const displayTrain = () => {};

// Appel à la fonction getDashboardInformation pour afficher le dashboard.
getDashboardInformation();

// Appel à la fonction displayTrain pour afficher les départs de train.

