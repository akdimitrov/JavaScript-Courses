function combinations(input) {
    const NUMBER = Number(input[0]);

    let count = 0;
    for (let x = 0; x <= NUMBER; x++) {
        for (let y = 0; y <= NUMBER; y++) {
            for (let z = 0; z <= NUMBER; z++) {
                if (x + y + z == NUMBER) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);
