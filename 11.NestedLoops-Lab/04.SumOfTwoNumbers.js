function sumOfTwoNumbers(input) {
    const START = Number(input[0]);
    const END = Number(input[1]);
    const MAGIC_NUM = Number(input[2]);
    let count = 0;
    let isFound = false;
    for (let x = START; x <= END; x++) {
        for (let y = START; y <= END; y++) {
            count++;
            if (x + y == MAGIC_NUM) {
                console.log(`Combination N:${count} (${x} + ${y} = ${MAGIC_NUM})`);
                isFound = true;
                x = END;
                break;
            }
        }
    }

    if (!isFound) {
        console.log(`${count} combinations - neither equals ${MAGIC_NUM}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
