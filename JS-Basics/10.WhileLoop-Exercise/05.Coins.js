function coins(input) {
    const AMOUNT = Number(input[0]);
    let change = AMOUNT * 100;
    let coins = Math.floor(change / 200);
    change %= 200;
    coins += Math.floor(change / 100);
    change %= 100;
    coins += Math.floor(change / 50);
    change %= 50;
    coins += Math.floor(change / 20);
    change %= 20;
    coins += Math.floor(change / 10);
    change %= 10;
    coins += Math.floor(change / 5);
    change %= 5;
    coins += Math.floor(change / 2);
    change %= 2;
    coins += Math.floor(change / 1);

    console.log(coins);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
