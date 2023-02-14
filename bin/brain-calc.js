#!/usr/bin/env node
import { welcome, check } from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';

const brainCalc = (name) => {
  console.log('What is the result of the expression?');
  let correct = true;
  let count = 0;
  let result = 0;
  while (correct && count < 3) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operationNum = Math.floor(Math.random() * 3);
    const operations = ['+', '-', '*'];
    switch (operationNum) {
      case 0: result = num1 + num2;
        break;
      case 1: result = num1 - num2;
        break;
      case 2: result = num1 * num2;
        break;
      default:
        console.log("Operation doesn't exist");
    }
    console.log(`Question: ${num1} ${operations[operationNum]} ${num2}`);
    correct = check(name, result);
    count += 1;
  }
};

const name = welcome();
brainCalc(name);
