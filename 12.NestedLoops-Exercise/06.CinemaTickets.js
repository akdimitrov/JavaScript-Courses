function cinemaTickets(input) {
    let index = 0;
    let students = 0;
    let standards = 0;
    let kids = 0;
    let movie = input[index++];
    while (movie != "Finish") {
        let freeSeats = Number(input[index++]);
        let soldTickets = 0;
        let ticket = input[index++];
        while (ticket != "End") {
            switch (ticket) {
                case "student": students++; break;
                case "standard": standards++; break;
                case "kid": kids++; break;
            }

            soldTickets++;
            if (soldTickets == freeSeats) {
                break;
            }
            
            ticket = input[index++];
        }

        let percent = (soldTickets / freeSeats) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        movie = input[index++];
    }

    let totalTickets = students + standards + kids;
    let studentPercent = (students / totalTickets) * 100;
    let standardPercent = (standards / totalTickets) * 100;
    let kidsPercent = (kids / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish",
]);
cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish",
]);
