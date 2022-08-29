function petShop(input) {
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);
    let totalPrice = dogFoodPacks * 2.5 + catFoodPacks * 4;
    console.log(`${totalPrice} lv.`);
}

petShop(["13", "9"]);