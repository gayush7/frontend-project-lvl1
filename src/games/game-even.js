export default function gameEven() {
    const operation = Math.floor(Math.random() * 101);
    const trueAnswer = (operation % 2 === 0 ? 'yes' : 'no');
    return {
        operation,
        trueAnswer
    };
}
