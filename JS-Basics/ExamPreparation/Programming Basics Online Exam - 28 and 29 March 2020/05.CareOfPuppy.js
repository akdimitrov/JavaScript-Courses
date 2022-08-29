function careOfPuppy(input) {
    let index = 0;
    let food = Number(input[index++]) * 1000;
    let grams = input[index++];
    while (grams != "Adopted") {
        food -= Number(grams);
        grams = input[index++];
    }

    if (food >= 0) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${food * -1} grams more.`);
    }
}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
