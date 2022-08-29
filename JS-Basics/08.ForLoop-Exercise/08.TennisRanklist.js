function tennisRanklist(input) {
    const WIN_POINTS = 2000;
    const FINAL_POINTS = 1200;
    const SEMIFINAL_POINTS = 720;
    let index = 0;
    const TOURNAMENTS = Number(input[index++]);
    const INITIAL_POINTS = Number(input[index++]);
    let winCount = 0;
    let newPoints = 0;
    for (let i = 0; i < TOURNAMENTS; i++) {
        switch (input[index++]) {
            case "W": 
                newPoints += WIN_POINTS;
                winCount++; 
                break;
            case "F": newPoints += FINAL_POINTS; break;
            case "SF": newPoints += SEMIFINAL_POINTS; break;
        }
    }
    
    const totalPoints = INITIAL_POINTS + newPoints;
    const averagePoints = Math.floor(newPoints / TOURNAMENTS);
    const winPercent = winCount / TOURNAMENTS * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
