function catWalking(input) {
    let walkingMinutesPerWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);
    let burntCaloriesPerDay = walkingMinutesPerWalk * walksPerDay * 5;
    if(caloriesPerDay / 2 <= burntCaloriesPerDay){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burntCaloriesPerDay}.`)
    }else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burntCaloriesPerDay}.`)
    }
}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);
