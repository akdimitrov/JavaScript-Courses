function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let suitPrice = Number(input[2]);
    if (extras > 150) {
        suitPrice *= 0.9;
    }

    let totalExpenses = extras * suitPrice + budget * 0.1;
    let moneyResult = Math.abs(totalExpenses - budget).toFixed(2);
    if (totalExpenses > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyResult} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyResult} leva left.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
