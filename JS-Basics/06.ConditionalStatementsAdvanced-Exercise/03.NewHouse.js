function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    if (flowersType == "Roses") {
        price = 5;
        if (flowersCount > 80) {
            price *= 0.9;
        }
    } else if (flowersType == "Dahlias") {
        price = 3.8;
        if (flowersCount > 90) {
            price *= 0.85;
        }
    } else if (flowersType == "Tulips") {
        price = 2.8;
        if (flowersCount > 80) {
            price *= 0.85;
        }
    } else if (flowersType == "Narcissus") {
        price = 3;
        if (flowersCount < 120) {
            price *= 1.2;
        }
    } else if (flowersType == "Gladiolus") {
        price = 2.5;
        if (flowersCount < 80) {
            price *= 1.2;
        }
    }

    let finalPrice = price * flowersCount;
    let priceDiff = Math.abs(budget - finalPrice).toFixed(2);
    if (finalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${priceDiff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${priceDiff} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
