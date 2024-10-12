const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

function createPoll(prompt) {
  const optionsAndVotes = new Map();
  prompt.options.forEach((el) => {
    optionsAndVotes.set(el, 0);
  });
  return {
    question: prompt.question,
    optionsAndVotes,
  };
}

const poll = createPoll(examplePrompt);


const vote = (vote) => {
  const index = poll.options.indexOf(vote);
  poll.votes[index]++;
  //console.log(`You voted for ${poll.options[vote - 1]}`);
  displays();
};

const displays = () => {
  console.log(poll.question);
  poll.options.forEach((el, index) => {
    console.log(`${index + 1}. ${el} - ${poll.votes[index]}`);
  });
};
