const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

const createPoll = (prompt) => {
  console.log(prompt.question);
  prompt.options.forEach((el) => {console.log(el)});
  
};

createPoll(examplePrompt);
