import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 99);
  const currentAnswer = isEven(question) ? 'yes' : 'no';

  return [question, currentAnswer];
};
export default () => {
  brainGames(
    description,
    getQuestionAndAnswer,
  );
};
