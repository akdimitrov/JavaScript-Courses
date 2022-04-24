function depositCalcucator(input) {
    const sum = Number(input[0]);
    const months = Number(input[1]);
    const anualInterestPercentage = Number(input[2]);
    const monthlyInterest = (sum * anualInterestPercentage) / 100 / 12;
    const finalSum = sum + months * monthlyInterest;
    console.log(finalSum);
}

depositCalcucator(["200 ", "3 ", "5.7 "]);
depositCalcucator(["2350", "6 ", "7 "]);
