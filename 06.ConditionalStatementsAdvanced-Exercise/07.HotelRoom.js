function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentPrice;
    let studioPrice;

    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (nights > 14) {
            studioPrice *= 0.7;
        } else if (nights > 7) {
            studioPrice *= 0.95;
        }
    } else if (month == "June" || month == "September") {
        studioPrice = 75.2;
        apartmentPrice = 68.7;
        if (nights > 14) {
            studioPrice *= 0.8;
        }
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
