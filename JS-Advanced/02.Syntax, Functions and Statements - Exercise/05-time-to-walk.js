function solve(steps, footprintLenght, speed) {
    let distanceInKm = steps * footprintLenght / 1000;
    let restSeconds = Math.floor(distanceInKm / 0.5) * 60; 
    let totalSeconds = distanceInKm / speed * 3600 + restSeconds;

    let hours = Math.floor(totalSeconds / 3600).toString();
    let minutes = Math.floor(totalSeconds / 60).toString();
    let seconds = Math.round(totalSeconds % 60).toString();

    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)