#!/usr/bin/env node
import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperationSymbol = (symbols) => {
  const randomIndex = getRandomNumber(0, symbols.length - 1);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const calculate = (number1, oper, number2) => {
  switch (oper) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: return 'oops!';
  }
};

const getQuestionAndAnswer = () => {
  const oper = getRandomOperationSymbol(operators);
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const question = `${number1} ${oper} ${number2}`;
  const currentAnswer = calculate(number1, oper, number2);
  return [question, String(currentAnswer)];
};
export default () => {
  brainGames(
    description,
    getQuestionAndAnswer,
  );
};
