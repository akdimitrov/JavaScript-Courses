function toyShop(input) {
    const PUZZLE_PRICE = 2.6;
    const DOLL_PRICE = 3.0;
    const BEAR_PRICE = 4.1;
    const MINION_PRICE = 8.2;
    const TRUCK_PRICE = 2.0;

    let holidayPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let toysCount = puzzles + dolls + bears + minions + trucks;
    let toysPrice =
        puzzles * PUZZLE_PRICE +
        dolls * DOLL_PRICE +
        bears * BEAR_PRICE +
        minions * MINION_PRICE +
        trucks * TRUCK_PRICE;
        
    if (toysCount >= 50) {
        toysPrice *= 0.75;
    }

    toysPrice *= 0.9;
    let resultMoney = Math.abs(toysPrice - holidayPrice).toFixed(2);
    if (toysPrice >= holidayPrice) {
        console.log(`Yes! ${resultMoney} lv left.`);
    } else {
        console.log(`Not enough money! ${resultMoney} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
