function tournamentOfChristmas(input) {
    const MONEY_PER_WIN = 20;
    let index = 0;
    let totalMoney = 0;
    let winDays = 0;
    let days = Number(input[index++]);

    for (let i = 0; i < days; i++) {
        let money = 0;
        let wins = 0;
        let losses = 0;

        let sport = input[index++];
        while (sport != "Finish") {
            let result = input[index++];
            if (result == "win") {
                money += MONEY_PER_WIN;
                wins++;
            } else {
                losses++;
            }
            sport = input[index++];
        }

        if (wins > losses) {
            money *= 1.1;
            winDays++;
        }

        totalMoney += money;
    }

    if (winDays > days / 2) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas([
    "2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish",
]);
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish",
]);
