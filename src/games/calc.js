#!/usr/bin/env node
import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randOper = () => operators[random(0, 2)];
const randNum1 = () => random(1, 99);
const randNum2 = () => random(1, 99);

const getQuestionAndAnswer = () => {
  const oper = randOper();
  const number1 = randNum1();
  const number2 = randNum2();
  const question = `${number1} ${oper} ${number2}`;

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
export default getQuestionAndAnswer;
brainGames(description, getQuestionAndAnswer);
