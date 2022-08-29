function foodDelivery(input) {
    const CHICKEN_MEAL_PRICE = 10.35;
    const FISH_MEAL_PRICE = 12.4;
    const VEGGIE_MEAL_PRICE = 8.15;
    const DESSERT_PRICE_PERCENTAGE = 20;
    const DELIVERY_PRICE = 2.5;

    let chickenMeals = Number(input[0]);
    let fishMeals = Number(input[1]);
    let veggieMeals = Number(input[2]);

    let finalPrice =
        (CHICKEN_MEAL_PRICE * chickenMeals +
            FISH_MEAL_PRICE * fishMeals +
            VEGGIE_MEAL_PRICE * veggieMeals) *
            ((100 + DESSERT_PRICE_PERCENTAGE) / 100) +
        DELIVERY_PRICE;
    console.log(finalPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
