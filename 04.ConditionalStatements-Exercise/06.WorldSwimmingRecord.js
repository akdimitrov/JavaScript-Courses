function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let swimmingSecondsFor1Meter = Number(input[2]);

    let attemptSeconds =
        Math.floor(distanceMeters / 15) * 12.5 +
        distanceMeters * swimmingSecondsFor1Meter;
    if (attemptSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${attemptSeconds.toFixed(2)} seconds.`);
    } else {
        let timeDiff = (attemptSeconds - recordSeconds).toFixed(2);
        console.log(`No, he failed! He was ${timeDiff} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
