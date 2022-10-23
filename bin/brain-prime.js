#!/usr/bin/env node
import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    let result = '';
    let answer = '';
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    for (let j = number - 1; j > 1; j -= 1) {
      if (number % j !== 0) {
        result = 'yes';
      } else {
        result = 'no';
      }
    }
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
prime();
