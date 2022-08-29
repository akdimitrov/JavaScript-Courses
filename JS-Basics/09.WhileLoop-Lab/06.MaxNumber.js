function maxNumber(input) {
    let index = 0;
    let data = input[index++];
    let maxNum = Number.MIN_SAFE_INTEGER;
    while (data !== "Stop") {
        let current = Number(data);
        maxNum = current > maxNum ? current : maxNum;
        data = input[index++];
    }

    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);
