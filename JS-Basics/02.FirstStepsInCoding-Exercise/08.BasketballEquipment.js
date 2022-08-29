function basketballEquipment(input) {
    const TRAINERS_PRICE_PERCENT = 0.6;
    const SUIT_PRICE_PERCENT = 0.8;
    const BALL_PRICE_PERCENT = 0.25;
    const ACCESSORIES_PRICE_PERCENT = 0.2;

    let annualFee = Number(input[0]);
    let trainersPrice = annualFee * TRAINERS_PRICE_PERCENT;
    let suitPrice = trainersPrice * SUIT_PRICE_PERCENT;
    let ballPrice = suitPrice * BALL_PRICE_PERCENT;
    let accessoriesPrice = ballPrice * ACCESSORIES_PRICE_PERCENT;
    let totalExpenses =
        annualFee + trainersPrice + suitPrice + ballPrice + accessoriesPrice;
    console.log(totalExpenses);
}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);
