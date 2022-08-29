function cinema(input) {
    const PREMIERE_PRICE = 12;
    const NORMAL_PRICE = 7.5;
    const DISCOUNT_PRICE = 5;

    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let income = 0;
    if (projectionType == "Premiere") {
        income = rows * cols * PREMIERE_PRICE;
    } else if (projectionType == "Normal") {
        income = rows * cols * NORMAL_PRICE;
    } else if (projectionType == "Discount") {
        income = rows * cols * DISCOUNT_PRICE;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
