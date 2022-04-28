function sumNumbers(input) {
    let index = 0;
    const NUMBER = input[index++];
    let sum = 0;
    while (sum < NUMBER) {
        sum += Number(input[index++]);
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
