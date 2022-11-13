import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getProgression = (step, beginArr) => {
  const arr = [];
  const length = step * 10;
  for (let j = 0; j <= length; j += step) {
    arr.push(beginArr + j);
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const beginArr = getRandomNumber(1, 99);
  const step = getRandomNumber(1, 5);
  const arr = getProgression(step, beginArr);

  const rand = Math.floor(Math.random() * getProgression(step, beginArr).length);
  const currentAnswer = arr[rand];
  arr[rand] = '..';
  const question = `${arr.join(' ')}`;

  return [question, String(currentAnswer)];
};

export default () => {
  brainGames(
    description,
    getQuestionAndAnswer,
  );
};
