function foodForPets(input) {
    let index = 0;
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let biscuits = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);
        foodEatenByDog += dogFood;
        foodEatenByCat += catFood;

        if (i % 3 == 0) {
            biscuits += (dogFood + catFood) * 0.1;
        }
    }

    let totalEatenFood = foodEatenByCat + foodEatenByDog;
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${(totalEatenFood * 100 / totalFood).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(foodEatenByDog * 100 / totalEatenFood).toFixed(2)}% eaten from the dog.`);
    console.log(`${(foodEatenByCat * 100 / totalEatenFood).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
