var readlineSync = require('readline-sync');
const chalk = require('chalk');

var uname = readlineSync.question("What is your name? ");
console.log(chalk.cyanBright("Hey " + uname + "!"));
console.log("Let's check how well you know Muskaan!");
var score = 0;

var quest = [
  qOne = {
    question: "1. What is Muskaan's favourite food? (Pizza, Lays or Pasta) ",
    answer: "Pasta"
  },
  qTwo = {
    question: "2. Who is Muskaan's favourite Bollywood actor? (Shahid Kapoor, Hrithik Roshan or Varun Dhawan) ",
    answer: "Hrithik Roshan"
  },
  qThree = {
    question: "3. What is Muskaan's favourite TV show? (Friends, Dil Dosti Dance or The Vampire Diaries) ",
    answer: "Dil Dosti Dance"
  },
  qFour = {
    question: "4. What is Muskaan's favourite hobby? (Dance, Sing or Watching shows) ",
    answer: "Dance"
  },
  qFive = {
    question: "5. What is Muskaan's dream company to work in? (Goldman Sachs, Google or Tesla) ",
    answer: "Google"
  },
  qSix = {
    question: "6. When is Muskaan's birthday? (19th November, 20th November or 20th October) ",
    answer: "19th November"
  },
  qSeven = {
    question: "7. Which TV actor is Muskaan's favourite? (Kunwar Amar, Parth Samthaan or Ian Somerhalder) ",
    answer: "Ian Somerhalder"
  },
  qEight = {
    question: "8. What is Muskaan's favourite colour? (Blue, Black or White) ",
    answer: "Black"
  },
  qNine = {
    question: "9. What is Muskaan's favourite city in India? (Mumbai, Chennai or Kolkata) ",
    answer: "Mumbai"
  },
  qten = {
    question: "10. One place which Muskaan wants to visit? (New York City, London or Faroe Islands) ",
    answer: "Faroe Islands"
  },
]

for(i=0; i<quest.length; i++){
  quiz(quest[i].question, quest[i].answer);
  console.log("\n");
}

console.log(chalk.bgRedBright("\nYour final score is " +score));

if (score > 5)
  console.log(chalk.cyanBright("\nCongratulations! You scored above the average score"));
else
  console.log(chalk.cyanBright("\nOh no! You didn't beat the average score"));

function quiz(question, answer){
  var userAns = readlineSync.question(question);

  if(userAns.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("You are correct!"));
    score = score + 1;
    console.log(chalk.bold.yellowBright("Your score is " +score));
  }
  else {
    console.log(chalk.redBright("You are wrong!"));
    console.log(chalk.bold.yellowBright("Your score is " +score));
  }
}

