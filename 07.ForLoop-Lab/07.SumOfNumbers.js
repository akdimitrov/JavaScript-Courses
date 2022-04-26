function sumOfNumbers(input) {
    const stringNum = "" + input[0];
    let sum = 0;
    for (let i = 0; i < stringNum.length; i++) {
        sum += Number(stringNum[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);
