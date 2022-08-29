function changeBureau(input) {
    const BITCOIN_TO_BGN = 1168;
    const CNY_TO_USD = 0.15;
    const USD_TO_BGN = 1.76;
    const EUR_TO_BGN = 1.95;
    let bitcoins = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinsToEuro = (bitcoins * BITCOIN_TO_BGN) / EUR_TO_BGN;
    let chineseYuanToEuro = (chineseYuan * CNY_TO_USD * USD_TO_BGN) / EUR_TO_BGN;
    let totalEuro = bitcoinsToEuro + chineseYuanToEuro;
    totalEuro -= (totalEuro * commission) / 100;

    console.log(totalEuro.toFixed(2));
}

changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
