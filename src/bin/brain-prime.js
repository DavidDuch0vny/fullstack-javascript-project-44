#!/usr/bin/env node
import { welcome } from '../cli.js';
import brainPrime from '../games/prime.js';

const name = welcome();
brainPrime(name);
