function usdToBgnConverter(input) {
    const USD_TO_BGN_COURSE = 1.79549;
    let usd = Number(input[0]);
    let bgn = usd * USD_TO_BGN_COURSE;
    console.log(bgn);
}

usdToBgnConverter(["22"]);
usdToBgnConverter(["100"]);
usdToBgnConverter(["12.5"]);
