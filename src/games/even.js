#!/usr/bin/env node

import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const even = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const getQuestionAndAnswer = () => {
  const question = random(1, 99);
  let result;
  if (even(question) === true) {
    result = 'yes';
  }
  if (even(question) === false) {
    result = 'no';
  }
  return [question, result];
};
brainGames(description, getQuestionAndAnswer);
export default getQuestionAndAnswer;
