function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let title;
    if (gender == "m") {
        if (age >= 16) {
            title = "Mr.";
        } else {
            title = "Master";
        }
    } else if (gender == "f") {
        if (age >= 16) {
            title = "Ms.";
        } else {
            title = "Miss";
        }
    }

    console.log(title);
}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
