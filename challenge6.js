const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

const coursePrompt = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"],
};

function createPoll(prompt) {
  const optionsAndVotes = new Map();
  prompt.options.forEach((el) => {
    optionsAndVotes.set(el, 0);
  });

  return {
    question: prompt.question,
    options: prompt.options,
    optionsAndVotes,
    vote(choice) {
      if (
        // vérifications pour que l'entrée us soit valable (nombre, compris dans le arr et <1)
        typeof choice !== "number" ||
        choice > this.options.length ||
        choice < 1
      ) {
        console.error("You can't vote for this option");
      } else {
        const optionChoosed = this.options[choice - 1]; //attribue à une variable le contenu de la première case du sondage
        optionsAndVotes.set(
          optionChoosed,
          this.optionsAndVotes.get(optionChoosed) + 1 //augmente de 1 la valeur récupérée par get
        );
      }
      console.log(`You voted for ${poll.options[choice - 1]}`); //affiche l'option choisie
      this.displays();
    },

    //affiche les informations actuelles du vote
    displays() {
      console.log(this.question);
      this.optionsAndVotes.forEach((options, votes) => {
        console.log(`${options} ${options <= 1 ? "vote" : "votes"} - ${votes}`); //affiche le nombre de votes (singulier/pluriel)
      });
    },

    wins() {
      const winner = [this.options[0]];
      // let currentVoteNumber = this.optionsAndVotes.get(winner);

      //console.log(currentVoteNumber);
      for (let i = 0; i < this.options.length; i++) {
        const currentOption = this.options[i];
        const currentVoteNumber = this.optionsAndVotes.get(currentOption);
        console.log(currentVoteNumber);
        if (currentVoteNumber >= this.optionsAndVotes.get(this.options[i])) {
          console.log("on est ici");
          if (currentVoteNumber === this.optionsAndVotes.get(this.options[i])) {
            console.log("on est là");
            winner.push(currentOption);
          } else {
            winner = [currentOption];
          }
        }
      }
      console.log(`${winner} won the poll !`);
    },
  };
}

const poll = createPoll(examplePrompt);

// CORRECTION
// "use strict";

// const languagePrompt = {
//   question: "What is your favorite programming language",
//   options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly", "5. Rust", "6. TypeScript"]
// };

// const coursePrompt = {
//   question: "Ce challenge est-il difficile?",
//   options: ["Oui", "Non"]
// }


// const createPoll = (poll) => {
//   const { question, options } = poll;
//   const scores = new Array(options.length).fill(0);
//   const displayScores = new Map();
//   options.forEach((option) => {
//     displayScores.set(option, 0);
//   });
//   const answer = (number) => {
//     if (Number.isInteger(number) && number <= options.length && number > 0) {
//       scores[number - 1]++;
//       displayScores.set(options[number - 1], scores[number - 1]);
//     } else {
//       console.error("Enter a valid option");
//     }
//     return {
//         question,
//         displayScores
//     }
//   };
//   return answer;
// };

// const languagePoll = createPoll(languagePrompt);
// const coursePoll = createPoll(coursePrompt);