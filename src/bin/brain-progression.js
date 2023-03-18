#!/usr/bin/env node
import { welcome } from '../cli.js';
import brainProgression from '../games/progression.js'

const name = welcome();
brainProgression(name);
