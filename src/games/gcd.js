import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'Find the greatest common divisor of given numbers';

const gcd = () => {
  const number1 = random(1, 99);
  const number2 = random(1, 99);
  let result;
  const question = `${number1} ${number2}`;
  const divisor = (num1, num2) => {
    let a = num1;
    let b = num2;
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else { b -= a; }
    }
    result = a;
    return result;
  };
  divisor(number1, number2);

  return [question, String(result)];
};
export default gcd;
brainGames(description, gcd);
