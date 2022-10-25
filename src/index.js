#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainGames = (description, answeAndQuestion) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, result] = answeAndQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    }
    if (result !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default brainGames;
