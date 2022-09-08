function solve(input) {
    let [a, b] = input.sort((a, b) => a - b);
    console.log(`${a} ${b}`);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);