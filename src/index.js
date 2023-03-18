import readlineSync from 'readline-sync/lib/readline-sync.js';
import { welcome } from './cli.js';
import brainEven from './games/even.js';
import brainProgression from './games/progression.js';
import brainPrime from './games/prime.js';
import brainGcd from './games/gcd.js';
import brainCalc from './games/calc.js';

const gameChoice = (choice, name) => {
  switch (choice) {
    case '1': brainEven(name); break;
    case '2': brainCalc(name); break;
    case '3': brainGcd(name); break;
    case '4': brainProgression(name); break;
    case '5': brainPrime(name); break;
    case '0': break;
    default:
      console.log('No such option. Choose again, please.');
      return gameChoice(choice, name);
  }
  return null;
};

const chooseTheGame = () => {
  const name = welcome();
  console.log('Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Guess missing number');
  console.log('5. Prime number');
  console.log('0. Exit');
  const choice = readlineSync.question('Your choice: ');
  gameChoice(choice, name);
};

export default chooseTheGame;
