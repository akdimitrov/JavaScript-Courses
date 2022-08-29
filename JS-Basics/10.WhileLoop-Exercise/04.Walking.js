function walking(input) {
    const STEPS_GOAL = 10000;
    let index = 0;
    let steps = 0;
    let isGoingHome = false;
    while (steps < STEPS_GOAL && !isGoingHome) {
        if (input[index] == "Going home") {
            index++;
            isGoingHome = true;
        }

        steps += Number(input[index++]);
    }

    if (steps >= STEPS_GOAL) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - STEPS_GOAL} steps over the goal!`);
    } else {
        console.log(`${STEPS_GOAL - steps} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
