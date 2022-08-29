function password(input) {
    let index = 0;
    const USERNAME = input[index++];
    const PASSWORD = input[index++];
    let inputPassword = input[index++];
    while (inputPassword !== PASSWORD) {
        inputPassword = input[index++];
    }

    console.log(`Welcome ${USERNAME}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
