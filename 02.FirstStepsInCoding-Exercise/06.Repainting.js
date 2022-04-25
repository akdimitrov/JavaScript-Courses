function repainting(input) {
    const NYLON_PRICE = 1.5;
    const PAINT_PRICE = 14.5;
    const THINNER_PRICE = 5;
    const BAG_PRICE = 0.4;

    let nylonSquareMeters = Number(input[0]) + 2;
    let paintLitres = Number(input[1]) * 1.1;
    let thinnerLitres = Number(input[2]);
    let labourHours = Number(input[3]);

    let materialExpenses =
        nylonSquareMeters * NYLON_PRICE +
        paintLitres * PAINT_PRICE +
        thinnerLitres * THINNER_PRICE +
        BAG_PRICE;
    let labourExpenses = materialExpenses * 0.3 * labourHours;
    let finalSum = materialExpenses + labourExpenses;
    console.log(finalSum);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
