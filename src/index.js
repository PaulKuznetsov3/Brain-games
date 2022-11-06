#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainGames = (description, answeAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const countRounds = 3;
  for (let i = 0; i < countRounds; i += 1) {
    const [question, currentAnswer] = answeAndQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (currentAnswer === answer) {
      console.log('Correct!');
    }
    if (currentAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${currentAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGames;
