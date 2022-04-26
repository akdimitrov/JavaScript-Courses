function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let type = "Hotel";
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            price = budget * 0.3;
            type = "Camp";
        } else {
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            price = budget * 0.4;
            type = "Camp";
        } else {
            price = budget * 0.8;
        }
    } else {
        destination = "Europe";
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
