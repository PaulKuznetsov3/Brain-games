import brainGames from '../index.js';
import getRandomNumber from '../utilit.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 99);
  const currentAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, String(currentAnswer)];
};

brainGames(description, getQuestionAndAnswer);
export default getQuestionAndAnswer;
