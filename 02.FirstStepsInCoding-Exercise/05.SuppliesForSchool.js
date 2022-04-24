function suppliesForSchool(input) {
    const penPackPrice = 5.8;
    const markerPackPrice = 7.2;
    const detergentPricePerLitre = 1.2;

    const penPacks = Number(input[0]);
    const markerPacks = Number(input[1]);
    const detergentLitres = Number(input[2]);
    const discountPercentage = Number(input[3]);

    const totalPrice =
        penPacks * penPackPrice +
        markerPacks * markerPackPrice +
        detergentLitres * detergentPricePerLitre;
    const finalPrice = totalPrice - totalPrice * (discountPercentage / 100);
    console.log(finalPrice);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
