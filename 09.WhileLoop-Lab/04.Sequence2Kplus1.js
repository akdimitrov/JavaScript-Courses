function sequence2Kplus1(input) {
    let index = 0;
    const N = Number(input[index++]);
    let number = 1;
    while (number <= N) {
        console.log(number);
        number = number * 2 + 1;
    }
}

sequence2Kplus1(["3"]);
sequence2Kplus1(["8"]);
sequence2Kplus1(["17"]);
sequence2Kplus1(["31"]);
