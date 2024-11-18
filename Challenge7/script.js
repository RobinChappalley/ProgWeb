"use strict";

const MAX_VALUE = 20

const randomNumber = (maxval) => {
  return Math.floor(Math.random() * maxval) + 1;
};
const highestScore = document.querySelector("#highscore");

let secretNumber = randomNumber(MAX_VALUE);

//vérifie la validité de l'entrée usr
document.querySelector("#check").addEventListener("click", () => {
  document.querySelector("#score").textContent--;

  if (checkValidity(MAX_VALUE)) {
    if (checkNumber()) {
      document.querySelector("#answer").textContent = secretNumber;
      document.querySelector("#hint").textContent = "Correct number!";
      setshighscore();
      document.body.style.backgroundColor = "var(--color-tertiary)";
      document.querySelector("#answer").classList.add("correct")
    } else {
      document.querySelector("#hint").textContent = `${
        checkHeight() ? "📈Too high" : "📉Too low"
      }`;
    }
  }
});

//reset
document.querySelector("#again").addEventListener("click", () => {
  document.querySelector("#guess").value = null;
  document.querySelector("#hint").textContent = "Start guessing...";
  document.querySelector("#score").textContent = MAX_VALUE;
  document.body.style.backgroundColor = "var(--color-primary)";
  document.querySelector("#answer").textContent = "?";
  secretNumber = randomNumber();
  document.querySelector("#answer").classList.remove("correct")
});

const checkNumber = () => {
  return document.querySelector("#guess").value == secretNumber;
};
const checkValidity = (maxval) => {
  if (
    isNaN(document.querySelector("#guess").value) ||
    document.querySelector("#guess").value < 1 ||
    document.querySelector("#guess").value > maxval
  ) {
    document.querySelector("#hint").textContent =
      "Guess must be between 1 and 20 !";
    return false;
  } else {
    return true;
  }
};


const checkHeight = () => {
  return document.querySelector("#guess").value > secretNumber;
};
const setshighscore = () => {
  if (
    document.querySelector("#score").textContent >
    document.querySelector("#highscore").textContent
  ) {
    highestScore.textContent = document.querySelector("#score").textContent;
  }
};

//CORRECTION
// "use strict";

// const MAX_NUMBER = 20;

// const hint = document.querySelector("#hint");
// const answer = document.querySelector("#answer");
// const scoreLabel = document.querySelector("#score");
// const highscoreLabel = document.querySelector("#highscore");

// document.querySelector("#between").textContent = `Between 1 and ${MAX_NUMBER}`

// const createRandomNumber = (max) =>
//     Math.floor(Math.random() * max) + 1;

// const game = {
//     correctAnswer: createRandomNumber(MAX_NUMBER),
//     score: MAX_NUMBER,
//     highscore: 0,

//     isCorrectAnswer(value) {
//         this.score--;
//         return this.correctAnswer === value;
//     },

//     setHighscore() {
//         if (this.score > this.highscore) this.highscore = this.score;
//         return this;
//     }
// }

// const handleCheck = () => {
//     const guess = document.querySelector("#guess");
//     // if not correct answer
//     if (!game.isCorrectAnswer(+guess.value)) {
//         // Si c'est pas un nombre valide
//         if (isNaN(guess.value) || guess.value < 1 || guess.value > MAX_NUMBER) {
//             hint.textContent = `💀 Guess must be between 1 and ${MAX_NUMBER}`
//         } else {
//             hint.textContent = guess.value > game.correctAnswer 
//                 ? `📈 number is too high` : `📉 number is too low`
//         }
//     } else { 
//         game.setHighscore();
//         hint.textContent = `🤘 Correct number!`
//         highscoreLabel.textContent = game.highscore;
//         answer.textContent = game.correctAnswer;

//         document.body.style.backgroundColor = "var(--color-tertiary)"  
//         answer.classList.add("correct"); 
//     }

//     scoreLabel.textContent = game.score;
// }

// const handleAgain = () => {
//     game.correctAnswer = createRandomNumber(MAX_NUMBER);
//     game.score = MAX_NUMBER;

//     document.body.style.backgroundColor = "var(--color-primary)";
//     hint.textContent = `Start guessing...`;
//     answer.textContent = `?`;
//     answer.classList.remove("correct");
//     scoreLabel.textContent = game.score;

// }

// document.querySelector("#check").addEventListener("click", handleCheck);
// document.querySelector("#again").addEventListener("click", handleAgain);
