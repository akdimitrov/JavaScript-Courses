function cinemaVoucher(input) {
    let index = 0;
    let tickets = 0;
    let others = 0;
    let voucherValue = Number(input[index++]);
    let command = input[index++];
    while (command != "End" && voucherValue > 0) {
        if (command.length > 8) {
            voucherValue -= command.charCodeAt(0) + command.charCodeAt(1);
            if (voucherValue >= 0) {
                tickets++;
            }
        } else {
            voucherValue -= command.charCodeAt(0);
            if (voucherValue >= 0) {
                others++;
            }
        }

        command = input[index++];
    }

    console.log(tickets);
    console.log(others);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame","Bohemian Rhapsody","Deadpool 2","End"]);
