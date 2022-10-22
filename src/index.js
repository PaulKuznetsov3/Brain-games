#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calc from './games/calc.js';

const brainGames = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${userName}!`);
  game();
};
brainGames();
