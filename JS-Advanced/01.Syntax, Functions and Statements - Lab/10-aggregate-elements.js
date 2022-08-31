function solve(input) {
    let sum = input.reduce((a, b) => a + b);
    let inverseSum = input.map(a => 1 / a).reduce((a,b) => a + b);

    console.log(sum);
    console.log(inverseSum);
    console.log(input.join(''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);