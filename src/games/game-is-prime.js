export default function gameIsPrime() {
    const operation = Math.floor(Math.random() * 101);
    let isPrime = true;
    if (operation > 1) {
        for (let i = 2; i < operation; i++) {
            if (operation % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }
    const trueAnswer = (isPrime ? 'yes' : 'no');
    return {
        operation,
        trueAnswer
    };
}
