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
      if (checkSanity(optionChoosed)) {
        console.error("You can't vote for this option");
      } else {
        this.optionsAndVotes.set(vote, this.optionsAndVotes.get(vote) + 1);
      }
      //console.log(`You voted for ${poll.options[vote - 1]}`);
      displays(); // displays the updated poll
    },
  };
}

const checkSanity = (parameter) => {
  //console.log(this.optionsAndVotes.size);
  return typeof parameter === 'number'
};
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
  poll.options.forEach((el, index) => {
    console.log(`${index + 1}. ${el} - ${poll.votes[index]}`);
  });
};
