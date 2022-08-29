function equalSumsEvenOddPosition(input) {
    const START = Number(input[0]);
    const END = Number(input[1]);
    let result = "";
    for (let i = START; i <= END; i++) {
        let numToString = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < numToString.length; j++) {
            if (j % 2 != 0) {
                evenSum += Number(numToString[j]);
            } else {
                oddSum += Number(numToString[j]);
            }
        }

        if (evenSum == oddSum) {
            result += `${numToString} `;
        }
    }

    if (result != "") {
        console.log(result);
    }
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);
