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
        typeof choice !== "number" ||
        choice > this.options.length ||
        choice < 1
      ) {
        console.error("You can't vote for this option");
      } else {
        const optionChoosed = this.options[choice - 1];
        optionsAndVotes.set(
          optionChoosed,
          this.optionsAndVotes.get(optionChoosed) + 1
        );
      }
      console.log(`You voted for ${poll.options[choice - 1]}`);
      //this.displays()
    },

    displays() {
      console.log(this.question);
      this.optionsAndVotes.forEach((key) => {
        console.log(`${key} - ${this.optionsAndVotes.get(key)}`);
      });
    },
  };
}

const poll = createPoll(examplePrompt);
const poll2 = createPoll(coursePrompt);

// const displays = () => {
//   console.log(this.question);

//   this.optionsAndVotes.forEach((key) => {
//     console.log(`${key} - ${this.optionsAndVotes.get(key)}`);
//   });
// };
