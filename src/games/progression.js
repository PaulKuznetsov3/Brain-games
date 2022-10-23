const progression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const beginArr = Math.round(Math.random() * 100);
    const step = Math.round(Math.random() * 5);
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

    console.log(`Question: ${arr.join(' ')}`);
    let answer = '';
    answer = readlineSync.question('Your answer: ');

    if (result === +answer) {
      console.log('Correct!');
    }
    if (+result !== +answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};
export default progression;
