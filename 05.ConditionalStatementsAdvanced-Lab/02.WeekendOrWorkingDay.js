function weekendOrWorkingDay(input) {
    let dayOfWeek = input[0];
    let dayType;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            dayType = "Working day";
            break;
        case "Saturday":
        case "Sunday":
            dayType = "Weekend";
            break;
        default:
            dayType = "Error";
    }

    console.log(dayType);
}

weekendOrWorkingDay(["Monday"]);
weekendOrWorkingDay(["Sunday"]);
weekendOrWorkingDay(["April"]);
