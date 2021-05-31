#!/usr/bin/env node
import game from '../src/index.js';
import gameCalc from '../src/games/game-calc.js';

game(`What is the result of the expression?`, gameCalc);
