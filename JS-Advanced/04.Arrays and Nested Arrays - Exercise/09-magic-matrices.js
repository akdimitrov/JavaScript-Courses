function solve(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((acc, num) => acc + num, 0);

        for (let col = 0; col < matrix[row].length; col++) {
            let colSum = 0;
            for (let row = 0; row < matrix.length; row++) {
                colSum += matrix[row][col];
            }

            if (rowSum !== colSum) {
                return false;
            }
        }
    }

    return true;
}

console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(solve(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));