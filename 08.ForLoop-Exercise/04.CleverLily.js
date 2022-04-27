function cleverLily(input) {
    const age = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);
    let toys = Math.floor(age / 2) + (age % 2);
    let money = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            money += i * 5 - 1;
        }
    }

    money += toys * toyPrice;
    const diff = Math.abs(money - washingMachinePrice).toFixed(2);
    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }
}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);
