const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

function createPoll(prompt) {
  //console.log(prompt.question);
  prompt.options.forEach((el) => {
    //console.log(el);
  });
  return {
    question: prompt.question,
    options: prompt.options,
    votes: [].fill(0),
  };
}

const mapOfPrompt = new Map();

//mapOfPrompt.set(poll.question, 0)

console.log(mapOfPrompt);
const poll = createPoll(examplePrompt);
poll.options.forEach((option) => mapOfPrompt.set(option, 0));

const vote = (vote) => {
  //const poll = createPoll(examplePrompt);
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
