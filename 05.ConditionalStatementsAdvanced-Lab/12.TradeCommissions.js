function tradeCommissionPercents(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissionPercent = -1;
    if (city == "Sofia") {
        if (sales > 10000) {
            commissionPercent = 12;
        } else if (sales > 1000) {
            commissionPercent = 8;
        } else if (sales > 500) {
            commissionPercent = 7;
        } else if (sales >= 0) {
            commissionPercent = 5;
        }
    } else if (city == "Varna") {
        if (sales > 10000) {
            commissionPercent = 13;
        } else if (sales > 1000) {
            commissionPercent = 10;
        } else if (sales > 500) {
            commissionPercent = 7.5;
        } else if (sales >= 0) {
            commissionPercent = 4.5;
        }
    } else if (city == "Plovdiv") {
        if (sales > 10000) {
            commissionPercent = 14.5;
        } else if (sales > 1000) {
            commissionPercent = 12;
        } else if (sales > 500) {
            commissionPercent = 8;
        } else if (sales >= 0) {
            commissionPercent = 5.5;
        }
    }

    if (commissionPercent != -1) {
        let commision = ((commissionPercent / 100) * sales).toFixed(2);
        console.log(commision);
    } else {
        console.log("error");
    }
}

tradeCommissionPercents(["Sofia", "1500"]);
tradeCommissionPercents(["Plovdiv", "499.99"]);
tradeCommissionPercents(["Varna", "3874.50"]);
tradeCommissionPercents(["Kaspichan", "-50"]);
