#!/usr/bin/env node
import welcome from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/src/cli.js';
import brainEven from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/bin/brain-even.js';

console.log('Welcome to the Brain Games!');

const name = welcome();

brainEven(name);
