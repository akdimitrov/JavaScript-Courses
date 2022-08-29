function moving(input) {
    let index = 0;
    const WIDTH = Number(input[index++]);
    const LENGTH = Number(input[index++]);
    const HEIGHT = Number(input[index++]);
    let freeVolume = WIDTH * LENGTH * HEIGHT;
    let command = input[index++];
    while (command != "Done" && freeVolume > 0) {
        freeVolume -= Number(command);
        command = input[index++];
    }

    if (freeVolume >= 0) {
        console.log(`${freeVolume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeVolume)} Cubic meters more.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
