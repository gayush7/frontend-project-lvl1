import readlineSync from "readline-sync";

export default function game(name) {
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 101);
        console.log(`Question: ${num}`);
        let answer = readlineSync.question('Your answer: ');
        if (num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no') {
            console.log("Correct!");
            if (i === 2) {
                return console.log(`Congratulations, ${name}!`);
            }
        } else {
            return console.log(`${answer} is wrong answer;   Let's try again, ${name}!`);
        }
    }
}
