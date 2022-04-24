function foodDelivery(input) {
    const chickenMealPrice = 10.35;
    const fishMealPrice = 12.4;
    const veggieMealPrice = 8.15;
    const dessertPricePercentage = 20;
    const deliveryPrice = 2.5;

    const chickenMeals = Number(input[0]);
    const fishMeals = Number(input[1]);
    const veggieMeals = Number(input[2]);

    const finalPrice =
        (chickenMealPrice * chickenMeals +
            fishMealPrice * fishMeals +
            veggieMealPrice * veggieMeals) *
            ((100 + dessertPricePercentage) / 100) +
        deliveryPrice;
    console.log(finalPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
