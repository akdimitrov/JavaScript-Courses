function passwordGuess(input) {
    const PASSWORD = "s3cr3t!P@ssw0rd";
    let inputPass = input[0];
    if (PASSWORD === inputPass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);
