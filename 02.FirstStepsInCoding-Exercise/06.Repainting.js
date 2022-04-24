function repainting(input) {
    const nylonPrice = 1.5;
    const paintPrice = 14.5;
    const thinnerPrice = 5;
    const bagPrice = 0.4;

    const nylonSquareMeters = Number(input[0]) + 2;
    const paintLitres = Number(input[1]) * 1.1;
    const thinnerLitres = Number(input[2]);
    const labourHours = Number(input[3]);

    const materialExpenses =
        nylonSquareMeters * nylonPrice +
        paintLitres * paintPrice +
        thinnerLitres * thinnerPrice +
        bagPrice;
    const labourExpenses = materialExpenses * 0.3 * labourHours;
    const finalSum = materialExpenses + labourExpenses;
    console.log(finalSum);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
