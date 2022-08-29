function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examMinutes = examHour * 60 + examMinute;
    let arrivalMinutes = arrivalHour * 60 + arrivalMinute;
    let diff = examMinutes - arrivalMinutes;

    let hours = Math.abs(parseInt(diff / 60));
    let minutes = Math.abs(diff % 60);
    let beforeAfter = "before";
    if (diff < 0) {
        beforeAfter = "after";
        console.log("Late");
    } else if (diff <= 30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (diff != 0) {
        if (hours == 0) {
            console.log(`${minutes} minutes ${beforeAfter} the start`);
        } else {
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            console.log(`${hours}:${minutes} hours ${beforeAfter} the start`);
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["16", "00", "15", "00"]);
