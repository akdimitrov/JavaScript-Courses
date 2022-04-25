function depositCalcucator(input) {
    let sum = Number(input[0]);
    let months = Number(input[1]);
    let anualInterestPercentage = Number(input[2]);
    let monthlyInterest = (sum * anualInterestPercentage) / 100 / 12;
    let finalSum = sum + months * monthlyInterest;
    console.log(finalSum);
}

depositCalcucator(["200 ", "3 ", "5.7 "]);
depositCalcucator(["2350", "6 ", "7 "]);
