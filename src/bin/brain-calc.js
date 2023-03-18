#!/usr/bin/env node
import { welcome } from '../cli.js';
import brainCalc from '../games/calc.js';

const name = welcome();
brainCalc(name);
