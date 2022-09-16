function solve(input) {
    let startIndex = Math.floor(input.length / 2);
    let resultArray = input.sort((a, b) => a - b).slice(startIndex);
    return resultArray;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));