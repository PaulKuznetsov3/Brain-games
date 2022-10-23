#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hallo, ${userName}!`);
let answerGame = '';
answerGame = readlineSync.question('gema? ');
const brainGames = () => {
  switch (answerGame) {
    case 'brain-even':
      even();
      break;
    case 'brain-calc':
      calc();
      break;
    case 'brain-gcd':
      gcd();
      break;
    case 'brain-progression':
      progression();
      break;
    case 'brain-prime':
      prime();
      break;
  }
};
brainGames();
