function trekkingMania(input) {
    let index = 0;
    const groups = Number(input[index++]);
    let musalaClimbers = 0;
    let montBlancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let totalClimbers = 0;

    for (let i = 0; i < groups; i++) {
        let groupCount = Number(input[index++]);
        totalClimbers += groupCount;
        if (groupCount <= 5) {
            musalaClimbers += groupCount;
        } else if (groupCount <= 12) {
            montBlancClimbers += groupCount;
        } else if (groupCount <= 25) {
            kilimanjaroClimbers += groupCount;
        } else if (groupCount <= 40) {
            k2Climbers += groupCount;
        } else {
            everestClimbers += groupCount;
        }
    }

    console.log(`${((musalaClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((montBlancClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2Climbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everestClimbers / totalClimbers) * 100).toFixed(2)}%`);
}

trekkingMania([ "10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78",]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);