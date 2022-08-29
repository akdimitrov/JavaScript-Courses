function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let city = input[3];

    let string = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`;
    console.log(string);
}

concatenateData(["Michael", "Owen", 35, "New York"]);