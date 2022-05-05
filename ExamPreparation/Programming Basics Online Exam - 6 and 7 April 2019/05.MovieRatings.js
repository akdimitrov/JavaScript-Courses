function movieRatings(input) {
    let index = 0;
    let allRatings = 0;
    let highestRatedMovie = "";
    let highestRating = 0;
    let lowestRatedMovie = "";
    let lowestRating = 10;
    let moviesCount = Number(input[index++]);
    for (let i = 0; i < moviesCount; i++) {
        let movie = input[index++];
        let rating = Number(input[index++]);
        allRatings += rating;

        if (rating > highestRating) {
            highestRatedMovie = movie;
            highestRating = rating;
        }

        if (rating < lowestRating) {
            lowestRatedMovie = movie;
            lowestRating = rating;
        }
    }

    console.log(`${highestRatedMovie} is with highest rating: ${highestRating.toFixed(1)}`)
    console.log(`${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`)
    console.log(`Average rating: ${(allRatings / moviesCount).toFixed(1)}`)
}

movieRatings([
    "5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1",
]);
movieRatings([
    "3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2",
]);
