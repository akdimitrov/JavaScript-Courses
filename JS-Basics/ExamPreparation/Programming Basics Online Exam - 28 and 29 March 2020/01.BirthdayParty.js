function birthdayParty(input) {
    let rent = Number(input);
    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rent / 3;
    let total = rent + cakePrice + drinksPrice + animatorPrice;
    console.log(total);
}

birthdayParty("2250");
birthdayParty("3720");
