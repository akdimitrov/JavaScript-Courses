function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuTotalPrice = gpuCount * 250;
    let cpuTotalPrice = gpuTotalPrice * 0.35 * cpuCount;
    let ramTotalPrice = gpuTotalPrice * 0.1 * ramCount;
    let finalPrice = gpuTotalPrice + cpuTotalPrice + ramTotalPrice;
    if (gpuCount > cpuCount) {
        finalPrice *= 0.85;
    }

    let moneyDiff = Math.abs(budget - finalPrice).toFixed(2);
    if (finalPrice <= budget) {
        console.log(`You have ${moneyDiff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${moneyDiff} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
