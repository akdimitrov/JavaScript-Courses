function fishTank(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3]);
    const waterLitres =
        ((length * width * height) / 1000) * ((100 - percent) / 100);
    console.log(waterLitres);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
