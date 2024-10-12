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
    optionsAndVotes,
    vote: (optionChoosed) => {
      const index = optionChoosed;
      console.log(optionChoosed)
      if (typeof optionChoosed !== "number") {
        console.error("You can't vote for this option");
      } else {
        const optionChoosed = this.optionsAndVotes.get(index);
        console.log(optionChoosed);
        optionsAndVotes.set(
          optionChoosed,
          optionsAndVotes.get(optionsAndVotes[index] + 1)
        );
      }
      //console.log(`You voted for ${poll.options[vote - 1]}`);
      //displays(); // displays the updated poll
    },
  };
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
