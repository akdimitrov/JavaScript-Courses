function bonusScore(input) {
    let initialScore = Number(input[0]);
    let bonusScore;
    if (initialScore <= 100) {
        bonusScore = 5;
    } else if (initialScore <= 1000) {
        bonusScore = initialScore * 0.2;
    } else {
        bonusScore = initialScore * 0.1;
    }

    if (initialScore % 2 == 0) {
        bonusScore += 1;
    } else if (initialScore % 10 == 5) {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(bonusScore + initialScore);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);
