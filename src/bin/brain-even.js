#!/usr/bin/env node
import { welcome } from '../cli.js';
import brainEven from '../games/even.js';

const name = welcome();
brainEven(name);
