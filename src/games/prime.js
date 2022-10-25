import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  let result = '';
  const question = random(1, 99);
  if (isPrime(question) === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, String(result)];
};

brainGames(description, prime);
export default prime;
