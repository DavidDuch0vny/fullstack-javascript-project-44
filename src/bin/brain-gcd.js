#!/usr/bin/env node
import { welcome } from '../cli.js';
import brainGcd from '../games/gcd.js';

const name = welcome();
brainGcd(name);
