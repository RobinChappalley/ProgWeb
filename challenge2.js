const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("Jun 13, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59,
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76,
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98,
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93,
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76,
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87,
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71,
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52,
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97,
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38,
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56,
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42,
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7,
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48,
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95,
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27,
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97,
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27,
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42,
    },
  ],
};

function ex1() {
  let nom = user.firstName.trim();
  let lastname = user.lastName.replace("$", "S");

  console.log(`Cher ${nom} ${lastname}, bienvenue dans votre dashboard `);

  let age = + user.age.slice(0, 2);
  age++;

  console.log(`Vous aurez ${age} ans l'année prochaine`);
}
ex1();

document.addEventListener("DOMContentLoaded", function () {
  function ex2(date) {
    const countdown = document.getElementById("countdown");
    let dateDebut = new Date();
    let dateFin = new Date(user.nextTourDate);
    let days = Math.floor(datesDiff(dateDebut, dateFin));
    let hours = Math.floor((datesDiff(dateDebut, dateFin) - days) * 24);
    let minutes = Math.floor(
      ((datesDiff(dateDebut, dateFin) - days) * 24 - hours) * 60
    );
    let seconds = Math.floor(
      (((datesDiff(dateDebut, dateFin) - days) * 24 - hours) * 60 - minutes) *
        60
    );

    if (dateDebut < dateFin) {
      countdown.textContent = `Plus que ${days} ${
        days > 1 ? "jours" : "jour"
      }, ${hours} h ${minutes} min et ${seconds} s avant le prochain concert du boss !`;
    } else {
      countdown.textContent = `Le concert a déjà eu lieu il y a ${days} ${
        days > 1 ? "jours" : "jour"
      }, ${hours} h ${minutes} min et ${seconds} s`;
    }
    setTimeout(function () {
      ex2();
    }, 1000);
  }
  ex2(); 
});

function datesDiff(a, b) {
  a = a.getTime();
  b = (b || new Date()).getTime();
  let c = a > b ? a : b,
    d = a > b ? b : a;
  return Math.abs((c - d) / 86400000);
}
function createsAlphabet() {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}
function ex3() {
  let difference = "a".charCodeAt();
  let averagelength = 0;
  for (const album of user.albums) {
    averagelength += album.title.replace(/ /g, "").length;
  }
  averagelength=averagelength / user.albums.length
  console.log();
  const alphabet = createsAlphabet();
  const letterpresence = new Array(26).fill(0);
  for (const album of user.albums) {
    let titleclean = album.title.replace(/ /g, "");
    for (let letter of titleclean) {
      letter = letter.toLowerCase();
      console.log(letter);
      letterpresence[letter.charCodeAt(0) - difference] += 1;
      console.log(letterpresence[letter.charCodeAt(0) - difference]);
    }
  }
  console.log(letterpresence);
  let maxIndex = letterpresence.reduce(
    (maxIdx, currentValue, currentIndex, arr) => {
      return currentValue > arr[maxIdx] ? currentIndex : maxIdx;
    },
    0
  );
  let nextalbumname ='';
  for (let index = 0; index < Math.floor(averagelength); index++) {
    nextalbumname += alphabet[maxIndex];
    console.log(index);
    
  }
  console.log(`La lettre la plus présente est le ${String.fromCharCode(maxIndex + difference)} avec ${letterpresence[maxIndex]} occurences.\n
  La longueur moyenne des titres est de ${averagelength}. Le prochain album du boss s'appellera donc probablement ${nextalbumname}`);

}

ex3();
