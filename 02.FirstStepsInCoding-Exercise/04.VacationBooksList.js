function vacationBookList(input) {
    const totalPages = Number(input[0]);
    const pagesReadPerHour = Number(input[1]);
    const days = Number(input[2]);
    const dailyReadingHours = totalPages / pagesReadPerHour / days;
    console.log(dailyReadingHours);
}

vacationBookList(["212 ", "20 ", "2 "]);
vacationBookList(["432 ", "15 ", "4 "]);
