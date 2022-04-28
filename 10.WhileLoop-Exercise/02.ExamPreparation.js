function examPreparation(input) {
    let index = 0;
    let BAD_GRADES_TRESHOLD = Number(input[index++]);
    let badGrades = 0;
    let grades = 0;
    let tasks = 0;
    let lastTask;
    let currentTask = input[index++];
    while (currentTask != "Enough" && badGrades != BAD_GRADES_TRESHOLD) {
        let grade = Number(input[index++]);
        if (grade <= 4) {
            badGrades++;
        }
        
        tasks++;
        grades += grade;
        lastTask = currentTask;
        currentTask = input[index++];
    }

    if (currentTask == "Enough") {
        console.log(`Average score: ${(grades / tasks).toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${lastTask}`);
    } else {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
