function oscars(input) {
    const NOMINATION_TRESHOLD = 1250.5;
    let index = 0;
    const actor = input[index++];
    let points = Number(input[index++]);
    const juryCount = Number(input[index++]);
    let isNominated = false;

    for (let i = 0; i < juryCount; i++) {
        const name = input[index++];
        const currentPoints = Number(input[index++]);
        points += (name.length * currentPoints) / 2;
        if (points > NOMINATION_TRESHOLD) {
            isNominated = true;
            break;
        }
    }

    if (isNominated) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(NOMINATION_TRESHOLD - points).toFixed(1)} more!`);
    }
}

oscars([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39",
]);
oscars([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33",
]);
