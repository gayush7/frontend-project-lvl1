#!/usr/bin/env node
import game from '../src/index.js';
import gameEven from '../src/games/game-even.js';

game(`Answer "yes" if the number is even, otherwise answer "no".`, gameEven);
