function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let boatRent = 4200;
    if (season == "Spring") {
        boatRent = 3000;
    } else if (season == "Winter") {
        boatRent = 2600;
    }

    if (fishers >= 12) {
        boatRent *= 0.75;
    } else if (fishers >= 7) {
        boatRent *= 0.85;
    } else {
        boatRent *= 0.9;
    }

    if (season != "Autumn" && fishers % 2 == 0) {
        boatRent *= 0.95;
    }

    let moneyDiff = Math.abs(boatRent - budget).toFixed(2);
    if (boatRent <= budget) {
        console.log(`Yes! You have ${moneyDiff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyDiff} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
