#!/usr/bin/env node
import brainGames from '../index.js';
import getRandomNumber from '../utilit.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
let number1;
let number2;
let oper;
let currentAnswer = '';
const getRandomOperationSymbol = () => {
  oper = operators[getRandomNumber(0, 2)];
  number1 = getRandomNumber(1, 99);
  number2 = getRandomNumber(1, 99);
};

const isCalculate = () => {
  switch (oper) {
    case '+':
      currentAnswer = number1 + number2;
      break;
    case '-':
      currentAnswer = number1 - number2;
      break;
    case '*':
      currentAnswer = number1 * number2;
      break;
    default: currentAnswer = 'oops!';
  }
};

const getQuestionAndAnswer = () => {
  getRandomOperationSymbol();
  const question = `${number1} ${oper} ${number2}`;
  isCalculate(number1, oper, number2);
  return [question, String(currentAnswer)];
};
export default getQuestionAndAnswer;
brainGames(description, getQuestionAndAnswer);
