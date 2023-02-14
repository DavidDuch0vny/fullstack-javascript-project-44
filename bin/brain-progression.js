#!/usr/bin/env node
import { welcome, check } from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';

const brainProgression = (name) => {
  console.log('What number is missing in the progression?');
  let correct = true;
  let count = 0;
  let result = 0;
  while (correct && count < 3) {
    const offsetNumber = (Math.floor(Math.random() * 10) + 1);
    const arrangeLength = (Math.floor(Math.random() * 6) + 5);
    const resultId = Math.floor(Math.random() * arrangeLength);
    const arrange = [];
    arrange[0] = (Math.floor(Math.random() * 100));
    if (resultId === 0) result = arrange[resultId];
    for (let i = 1; i < arrangeLength; i += 1) {
      arrange[i] = arrange[i - 1] + offsetNumber;
      if (i === resultId) {
        result = arrange[resultId];
      }
    }
    arrange[resultId] = '..';
    console.log((`Question: ${arrange}`).replace(/,/g, ' '));
    correct = check(name, result);
    count += 1;
  }
};

const name = welcome();
brainProgression(name);
