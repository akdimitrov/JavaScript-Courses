function basketballEquipment(input) {
    const annualFee = Number(input[0]);
    const trainersPrice = annualFee * 0.6;
    const suitPrice = trainersPrice * 0.8;
    const ballPrice = suitPrice / 4;
    const accessoriesPrice = ballPrice / 5;
    const totalExpenses =
        annualFee + trainersPrice + suitPrice + ballPrice + accessoriesPrice;
    console.log(totalExpenses);
}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);
