import readlineSync from 'readline-sync';

export default function game(question, func) {
  console.log('Welcome to th Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${name}`);
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const resultF = func();
    console.log(`Question: ${resultF.operation}`);
    const answer = (`${readlineSync.question('Your answer: ')}`);
    if (answer === (`${resultF.trueAnswer}`)) {
      console.log('Correct!');
      if (i === 2) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      return console.log(`'${answer}' is wrong answer;(. Correct answer was '${resultF.trueAnswer}' \n Let's try again, ${name}!`);
    }
  }
  return null;
}
