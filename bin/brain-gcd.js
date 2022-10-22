#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    let result;
    let answer = 0;
    console.log(`Question: ${number1} ${number2}`);
    answer = readlineSync.question('Your answer: ');
    const divisor = (num1, num2) => {
      while (num1 !== num2) {
        if (num1 > num2) {
          num1 -= num2;
        } else { num2 -= num1; }
      }
      result = num1;
      return result;
    };
    divisor(number1, number2);
    if (result === +answer) {
      console.log('Correct!');
    }
    if (result !== +answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};
gcd();
