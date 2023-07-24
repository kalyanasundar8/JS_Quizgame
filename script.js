const prompt = require("prompt-sync")();

console.log("Welcome to the Quiz Game🕹️");

let correctAnswers = 0;
let totalQuestions = 2;

const answer_one = prompt("What is mean by TN? ");
const correctAnswer = "tamilnadu";

if (answer_one === correctAnswer) {
  console.log("Answer is correct✅");
  correctAnswers++;
} else {
  console.log("Anser is wrong❌");
}

const answer_two = prompt("Rupees is which countries currency? ");
const correctAnswer2 = "india";

if (answer_two === correctAnswer2) {
  console.log("Answer is correct✅");
  correctAnswers++;
} else {
  console.log("Anser is wrong❌");
}

const percentage = Math.round((correctAnswers / totalQuestions) * 100);

console.log("Correct answers🏆: " + correctAnswers);
console.log("Percent of your quiz➗: " + percentage);
