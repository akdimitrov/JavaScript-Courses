function oldBooks(input) {
    let index = 0;
    const SEARCHED_BOOK = input[index++];
    let checkedBooks = 0;
    let currentBook = input[index++];
    while (currentBook != SEARCHED_BOOK && currentBook != "No More Books") {
        currentBook = input[index++];
        checkedBooks++;
    }

    if (currentBook != SEARCHED_BOOK) {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    } else {
        console.log(`You checked ${checkedBooks} books and found it.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
