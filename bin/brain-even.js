#!/usr/bin/env node
import { welcome, check } from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let correct = true;
  let count = 0;
  while (correct && count < 3) {
    const number = Math.floor(Math.random() * 100);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    correct = check(name, isEven);
    count += 1;
  }
};

const name = welcome();
brainEven(name);
