import brainGames from '../index.js';
import getRandomNumber from '../utilit.js';

const description = 'What number is missing in the progression?';
const getProgression = () => {
  const beginArr = getRandomNumber(1, 99);
  const step = getRandomNumber(1, 5);
  const arr = [];
  const length = step * 10;
  for (let j = 0; j <= length; j += step) {
    arr.push(beginArr + j);
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const arr = getProgression();

  const rand = Math.floor(Math.random() * getProgression().length);
  const currentAnswer = arr[rand];
  arr[rand] = '..';
  const question = `${arr.join(' ')}`;

  return [question, String(currentAnswer)];
};
brainGames(description, getQuestionAndAnswer);
export default getQuestionAndAnswer;
