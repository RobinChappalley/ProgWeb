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
        const optionChoosed = this.options[choice-1];
        optionsAndVotes.set(
          optionChoosed,
          this.optionsAndVotes.get(optionChoosed) + 1
        );
      }
      console.log(`You voted for ${poll.options[choice - 1]}`);
      displays(this); // displays the updated poll
    },
  };
}

function fntest(test) {
  console.log(test);
}

const poll = createPoll(examplePrompt);
const poll2 = createPoll(coursePrompt);

// const vote = (optionChoosed) => {
//   if (checkSanity(optionChoosed)) {
//     console.error("You can't vote for this option");
//   } else {
//     this.optionsAndVotes.set(vote, this.optionsAndVotes.get(vote) + 1);
//   }
//   //console.log(`You voted for ${poll.options[vote - 1]}`);
//   displays();
// };

const displays = (poll) => {
  console.log(poll.question);

  poll.optionsAndVotes.forEach((key) => {
    console.log(`${key} - ${poll.optionsAndVotes.get(key)}`);
  });
};
