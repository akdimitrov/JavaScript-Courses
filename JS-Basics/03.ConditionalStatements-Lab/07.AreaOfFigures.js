function areaOfFigures(input) {
    let shape = input[0];
    let a = Number(input[1]);
    let area;

    if (shape === "square") {
        area = a * a;
    } else if (shape === "rectangle") {
        area = a * Number(input[2]);
    } else if (shape === "circle") {
        area = Math.PI * a * a;
    } else if (shape === "triangle") {
        area = (a * Number(input[2])) / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
