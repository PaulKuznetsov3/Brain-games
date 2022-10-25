#!/usr/bin/env node

import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const even = () => {
  const question = random(1, 99);
  let result;
  if (question % 2 === 0) {
    result = 'yes';
  }
  if (question % 2 !== 0) {
    result = 'no';
  }
  return [question, result];
};
brainGames(description, even);
export default even;
