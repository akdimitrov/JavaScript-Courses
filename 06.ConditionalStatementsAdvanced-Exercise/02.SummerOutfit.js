function summerOutfit(input) {
    let degrees = Number(input[0]);
    let partOfTheDay = input[1];
    let outfit = "Shirt";
    let shoes = "Moccasins";
    if (partOfTheDay == "Morning") {
        if (degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
    } else if (partOfTheDay == "Afternoon") {
        if (degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (degrees > 18) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
