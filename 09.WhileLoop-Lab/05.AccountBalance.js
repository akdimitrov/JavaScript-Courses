function accountBalance(input) {
    let index = 0;
    let total = 0;
    let command = input[index++];
    while (command !== "NoMoreMoney") {
        const currentAmount = Number(command);
        if (currentAmount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += currentAmount;
        console.log(`Increase: ${currentAmount.toFixed(2)}`);
        command = input[index++];
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);
