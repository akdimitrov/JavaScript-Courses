function trainTheTrainers(input) {
    let index = 0;
    let averageGrades = 0;
    let presentationsCount = 0;
    const juryCount = Number(input[index++]);
    let presentation = input[index++];
    while (presentation != "Finish") {
        presentationsCount++;
        let grades = 0;
        for (let i = 0; i < juryCount; i++) {
            grades += Number(input[index++]);
        }

        const averageGrade = grades / juryCount;
        console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
        averageGrades += averageGrade;
        presentation = input[index++];
    }

    const overallAverage = averageGrades / presentationsCount;
    console.log(`Student's final assessment is ${overallAverage.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish",
]);
trainTheTrainers([
    "3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish",
]);
trainTheTrainers([
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish",
]);
