function sumSeconds(input) {
    let player1Seconds = Number(input[0]);
    let player2Seconds = Number(input[1]);
    let player3Seconds = Number(input[2]);

    let totalSeconds = player1Seconds + player2Seconds + player3Seconds;
    let minutes = parseInt(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`${minutes}:${seconds}`);
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
