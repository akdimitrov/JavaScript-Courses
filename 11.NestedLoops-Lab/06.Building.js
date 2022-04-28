function building(input) {
    const FLOORS = Number(input[0]);
    const ROOMS = Number(input[1]);
    let sign;
    for (let row = FLOORS; row > 0; row--) {
        let floor = "";
        for (let col = 0; col < ROOMS; col++) {
            if (row == FLOORS) {
                sign = "L";
            } else if (row % 2 != 0) {
                sign = "A";
            } else {
                sign = "O";
            }

            floor += `${sign}${row}${col} `;
        }

        console.log(floor);
    }
}

building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);
