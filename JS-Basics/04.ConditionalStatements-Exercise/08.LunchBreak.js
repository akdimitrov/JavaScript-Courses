function lunchBreak(input) {
    let movieName = input[0];
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;
    let totalTimeNeeded = lunchTime + restTime + movieDuration;
    let timeDiff = Math.ceil(Math.abs(totalTimeNeeded - breakDuration));
    if (totalTimeNeeded <= breakDuration) {
        console.log(`You have enough time to watch ${movieName} and left with ${timeDiff} minutes free time.`
        );
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeDiff} more minutes.`
        );
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
