let operators = [{
    sign: "+",
    method: function (a, b) {
        return a + b;
    }
}, {
    sign: "-",
    method: function (a, b) {
        return a - b;
    }
}, {
    sign: "*",
    method: function (a, b) {
        return a * b;
    }
}];

export default function gameCalc() {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 11);
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const operation = num1 + ' ' + operators[selectedOperator].sign + ' ' + num2;
    const trueAnswer = operators[selectedOperator].method(num1, num2);

    return {
        operation,
        trueAnswer
    };
}
