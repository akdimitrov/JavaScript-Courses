function solve(array) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result = [];
    array.reduce((acc, num) => {
        if (num >= biggestNum) {
            acc.push(num);
            biggestNum = num;
        }

        return acc;
    }, result);
    
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));