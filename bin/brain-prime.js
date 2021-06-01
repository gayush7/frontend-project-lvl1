#!/usr/bin/env node
import game from '../src/index.js';
import gameIsPrime from '../src/games/game-is-prime.js';

game('Answer "yes" if given number is prime. Otherwise answer "no".', gameIsPrime);
