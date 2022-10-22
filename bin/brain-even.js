#!/usr/bin/env node
import readlineSync from 'readline-sync';

const random = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    let number = 0;
    number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let answer = '';
    answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (number % 2 === 0 && answer !== 'yes') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (number % 2 !== 0 && answer !== 'no') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
random();
