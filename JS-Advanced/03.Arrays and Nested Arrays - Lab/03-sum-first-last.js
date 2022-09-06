function solve(input) {
    let result = Number(input[0]) + Number(input[input.length - 1]);
    return result;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));