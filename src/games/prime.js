import brainGames from '../index.js';
import random from '../utilit.js';

const description = `Answer 'yes' if given number is prime. Otherwise answer 'no'`;
const prime = () => {
  let result = '';
  const question = random(1, 99);
  for (let j = question - 1; j > 1; j -= 1) {
    if (question % j !== 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }

  return [question, String(result)];
};
brainGames(description, prime);
export default prime;
