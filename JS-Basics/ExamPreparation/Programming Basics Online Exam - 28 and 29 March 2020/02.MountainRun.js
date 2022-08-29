function mountainRun(input) {
    const DELAY_SECONDS_PER_50_METERS = 30;
    const RECORD_SECONDS = Number(input[0]);
    const DISTANCE_METERS = Number(input[1]);
    const SECONDS_PER_METER = Number(input[2]);

    const CURRENT_SECONDS =
        DISTANCE_METERS * SECONDS_PER_METER +
        Math.floor(DISTANCE_METERS / 50) * DELAY_SECONDS_PER_50_METERS;
    if (CURRENT_SECONDS < RECORD_SECONDS) {
        console.log(`Yes! The new record is ${CURRENT_SECONDS.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(CURRENT_SECONDS - RECORD_SECONDS).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);
