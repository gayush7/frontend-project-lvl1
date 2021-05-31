#!/usr/bin/env node
import game from '../src/game.js';
import askName from "../src/cli.js";
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
askName(name);
console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
game(name);

