let nbSheeps = 8;

showsSheeps(nbSheeps);

function showsSheeps(nbsheeps) {
  if (nbSheeps == 0) {
    console.log("Il n'y a pas de moutons");
  } else {
    console.log("Il y a " + nbsheeps + " moutons");
    console.log("1er mouton");
    for (let n = 2; n <= nbSheeps; n++) {
      console.log(n + "e mouton");
    }
  }
}

let radius = 5;
let area = areaOfCircle(radius);
console.log(area);

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

let valeur = 23;

function factorielle(nombre) {
  if (nombre === 0) {
    return 1;
  } else {
    return nombre * factorielle(nombre - 1);
  }
}
console.log(factorielle(valeur));
