function suppliesForSchool(input) {
    const PEN_PACK_PRICE = 5.8;
    const MARKER_PACK_PRICE = 7.2;
    const DETERGENT_PRICE_PER_LITRE = 1.2;

    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let detergentLitres = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let totalPrice =
        penPacks * PEN_PACK_PRICE +
        markerPacks * MARKER_PACK_PRICE +
        detergentLitres * DETERGENT_PRICE_PER_LITRE;
    let finalPrice = totalPrice - totalPrice * (discountPercentage / 100);
    console.log(finalPrice);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
