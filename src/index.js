import readlineSync from "readline-sync";
import askName from "./cli.js";


export default function game(question, func) {
    console.log("Welcome to th Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    askName(name);
    console.log(question);
    for (let i = 0; i < 3; i++) {
        let resultF = func();
        console.log(`Question: ${resultF.operation}`);
        let answer = '' + readlineSync.question('Your answer: ');
        if (answer === '' + resultF.trueAnswer) {
            console.log("Correct!");
            if (i === 2) {
                return console.log(`Congratulations, ${name}!`);
            }
        } else {
            return console.log(`'${answer}' is wrong answer;(. Correct answer was '${aa.trueAnswer}' \n Let's try again, ${name}!`);
        }
    }
}
