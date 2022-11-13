import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else { b -= a; }
  }

  return a;
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const question = `${number1} ${number2}`;
  const currentAnswer = getGcd(number1, number2);

  return [question, String(currentAnswer)];
};
export default () => {
  brainGames(
    description,
    getQuestionAndAnswer,
  );
};
