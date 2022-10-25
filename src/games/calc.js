#!/usr/bin/env node
import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calc = () => {
  const oper = operators[random(0, 2)];
  const number1 = random(1, 99);
  const number2 = random(1, 99);
  const question = number1 + oper + number2;

  let result = '';

  switch (oper) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default: result = 'oops!';
  }
  return [question, String(result)];
};
export default calc;
brainGames(description, calc);
