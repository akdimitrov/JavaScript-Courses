function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = -1;
    if ((dayOfWeek == "Monday" ||
        dayOfWeek == "Tuesday" ||
        dayOfWeek == "Wednesday" ||
        dayOfWeek == "Thursday" ||
        dayOfWeek == "Friday")) {
        switch (fruit) {
            case "banana":
                price = 2.5; break;
            case "apple":
                price = 1.2; break;
            case "orange":
                price = 0.85; break;
            case "grapefruit":
                price = 1.45; break;
            case "kiwi":
                price = 2.7; break;
            case "pineapple":
                price = 5.5; break;
            case "grapes":
                price = 3.85; break;
        }
    } else if ((dayOfWeek == "Saturday" ||
                dayOfWeek == "Sunday")) {
        switch (fruit) {
            case "banana":
                price = 2.7; break;
            case "apple":
                price = 1.25; break;
            case "orange":
                price = 0.9; break;
            case "grapefruit":
                price = 1.6; break;
            case "kiwi":
                price = 3; break;
            case "pineapple":
                price = 5.6; break;
            case "grapes":
                price = 4.2; break;
        }
    }

    if (price != -1) {
        console.log((price * quantity).toFixed(2));
    } else {
        console.log("error");
    }
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
