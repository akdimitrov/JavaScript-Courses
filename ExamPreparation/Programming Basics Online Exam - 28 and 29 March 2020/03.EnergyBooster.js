function energyBooster(input) {
    const SMALL_SET_NUMBER = 2;
    const BIG_SET_NUMBER = 5;
    let fruit = input[0];
    let size = input[1];
    let sets = Number(input[2]);
    let price = 0;
    if (size == "small") {
        switch (fruit) {
            case "Watermelon": price = 56; break;
            case "Mango": price = 36.66; break;
            case "Pineapple": price = 42.10; break;
            case "Raspberry": price = 20; break;
        }
        price *= SMALL_SET_NUMBER * sets;
    } else if(size == "big") {
        switch (fruit) {
            case "Watermelon": price = 28.7; break;
            case "Mango": price = 19.6; break;
            case "Pineapple": price = 24.80; break;
            case "Raspberry": price = 15.20; break;
        }
        price*= BIG_SET_NUMBER * sets;
    }

    if (price > 1000) {
        price *= 0.5;
    }else if (price >= 400) {
        price *= 0.85;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);
