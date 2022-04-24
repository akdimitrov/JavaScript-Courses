function usdToBgnConverter(input) {
    const usd = Number(input[0]);
    const bgn = usd * 1.79549;
    console.log(bgn);
}

usdToBgnConverter(["22"]);
usdToBgnConverter(["100"]);
usdToBgnConverter(["12.5"]);
