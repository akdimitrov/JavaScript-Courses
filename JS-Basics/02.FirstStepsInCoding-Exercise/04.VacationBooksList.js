function vacationBookList(input) {
    let totalPages = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let days = Number(input[2]);
    let dailyReadingHours = totalPages / pagesReadPerHour / days;
    console.log(dailyReadingHours);
}

vacationBookList(["212 ", "20 ", "2 "]);
vacationBookList(["432 ", "15 ", "4 "]);
