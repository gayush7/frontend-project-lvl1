export default function gameProgression() {
  const numbers = [Math.floor(Math.random() * 11)];
  const iter = Math.floor(Math.random() * 11);
  for (let i = 1; i < 10; i += 1) {
    numbers[i] = numbers[i - 1] + iter;
  }
  const j = Math.floor(Math.random() * 10);
  const trueAnswer = numbers[j];
  numbers[j] = '..';
  const operation = numbers.join(' ');
  return {
    operation,
    trueAnswer,
  };
}
