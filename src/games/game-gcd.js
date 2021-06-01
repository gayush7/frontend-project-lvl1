function gcdRec(a, b) {
  if (b) {
    return gcdRec(b, a % b);
  }
  return Math.abs(a);
}

export default function gameGcd() {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 11);
  const operation = (`${num1} ${num2}`);
  const trueAnswer = gcdRec(num1, num2);
  return {
    operation,
    trueAnswer,
  };
}
