#!/usr/bin/env node
import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const oper = operators[Math.floor(Math.random() * 3)];
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    const num = number1 + oper + number2;
    let result;
    let answer = 0;
    switch (oper) {
      case '+':
        result = number1 + number2;
        console.log(`Question: ${num}`);
        answer = readlineSync.question('Your answer: ');
        if (result === +answer) {
          console.log('Correct!');
        }
        if (result !== +answer) {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
          console.log(`Let's try again, ${userName}!`);
          return;
        }
        break;
      case '-':
        result = number1 - number2;
        console.log(`Question: ${num}`);
        answer = readlineSync.question('Your answer: ');
        if (result === +answer) {
          console.log('Correct!');
        }
        if (result !== +answer) {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
          console.log(`Let's try again, ${userName}!`);
          return;
        }
        break;
      case '*':
        result = number1 * number2;
        console.log(`Question: ${num}`);
        answer = readlineSync.question('Your answer: ');
        if (result === +answer) {
          console.log('Correct!');
        }
        if (result !== +answer) {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
          console.log(`Let's try again, ${userName}!`);
          return;
        }
        break;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
calc();
