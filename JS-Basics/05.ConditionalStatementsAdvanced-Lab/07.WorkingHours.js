function workingHours(input) {
    let time = Number(input[0]);
    let dayOfWeek = input[1];
    if (dayOfWeek != "Sunday" && time >= 10 && time <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
