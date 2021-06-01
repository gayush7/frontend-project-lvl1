function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}


export default function gameGcd() {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 11);
    const operation = num1 + ' ' + num2;
    const trueAnswer = gcd_rec(num1, num2);

    return {
        operation,
        trueAnswer
    };
}
