#!/usr/bin/env node
import { welcome, check, gCD } from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';

const brainGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  let correct = true;
  let count = 0;
  while (correct && count < 3) {
    const num1 = (Math.floor(Math.random() * 10) + 1);
    const num2 = (Math.floor(Math.random() * 10) + 1);
    const result = gCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    correct = check(name, result);
    count += 1;
  }
};

const name = welcome();
brainGcd(name);
