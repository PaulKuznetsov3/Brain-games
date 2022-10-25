import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const beginArr = random(1, 99);
  const step = random(1, 5);
  const arr = [];
  const length = step * 10;
  const generateArr = () => {
    for (let j = 0; j <= length; j += step) {
      arr.push(beginArr + j);
    }
    return arr;
  };
  generateArr(beginArr, length, step);

  const rand = Math.floor(Math.random() * arr.length);
  const result = arr[rand];
  arr[rand] = '..';
  const question = `${arr.join(' ')}`;

  return [question, String(result)];
};
brainGames(description, progression);
export default progression;