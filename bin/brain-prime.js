#!/usr/bin/env node
import { welcome, check, gCD } from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';

const brainGcd = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correct = true;
  let count = 0;
  while (correct && count < 3) {
    let isPrime = 'yes';
    const number = (Math.floor(Math.random() * 10) + 2);
    for (let i = 2; i < number; i = i + 1) {
      if (number % i === 0) {
        isPrime = 'no';
        break;
      }
    }
    console.log(`Question: ${number}`);
    correct = check(name, isPrime);
    count += 1;
  }
};

const name = welcome();
brainGcd(name); 
