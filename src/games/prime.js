import { check } from '../cli.js';

const brainPrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correct = true;
  let count = 0;
  while (correct && count < 3) {
    let isPrime = 'yes';
    const number = (Math.floor(Math.random() * 10) + 2);
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = 'no';
        break;
      }
    }
    console.log(`Question: ${number}`);
    correct = check(name, isPrime, count);
    count += 1;
  }
};

export default brainPrime;
