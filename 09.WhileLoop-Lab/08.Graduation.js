function graduation(input) {
    let index = 0;
    const NAME = input[index++];
    let grades = 0;
    let year = 1;
    let fails = 0;
    while (year <= 12) {
        let grade = Number(input[index++]);
        if (grade >= 4) {
            year++;
            grades += grade;
        } else {
            fails++;
            if (fails > 1) {
                break;
            }
        }
    }

    if (year == 13) {
        let averageGrade = (grades / 12).toFixed(2);
        console.log(`${NAME} graduated. Average grade: ${averageGrade}`);
    } else {
        console.log(`${NAME} has been excluded at ${year} grade`);
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5",]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
