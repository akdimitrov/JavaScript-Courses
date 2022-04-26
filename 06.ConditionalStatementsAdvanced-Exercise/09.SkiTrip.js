function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let price = 18;
    if (roomType == "apartment") {
        price = 25;
        if (days < 10) {
            price *= 0.7;
        } else if (days <= 15) {
            price *= 0.65;
        } else {
            price *= 0.5;
        }
    } else if (roomType == "president apartment") {
        price = 35;
        if (days < 10) {
            price *= 0.9;
        } else if (days <= 15) {
            price *= 0.85;
        } else {
            price *= 0.8;
        }
    }

    price *= days - 1;
    let finalPrice = rating == "positive" ? (price *= 1.25) : (price *= 0.9);
    console.log(finalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
