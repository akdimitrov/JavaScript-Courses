function vacation(input) {
    let index = 0;
    const VACATION_COST = Number(input[index++]);
    let savings = Number(input[index++]);
    let totalDays = 0;
    let spendCounter = 0;

    while (savings < VACATION_COST && spendCounter < 5) {
        totalDays++;
        let action = input[index++];
        let amount = Number(input[index++]);
        if (action == "save") {
            savings += amount;
            spendCounter = 0;
        } else if (action == "spend") {
            savings -= Math.min(savings, amount);
            spendCounter++;
        }
    }

    if (spendCounter == 5) {
        console.log("You can't save the money.");
        console.log(totalDays);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
