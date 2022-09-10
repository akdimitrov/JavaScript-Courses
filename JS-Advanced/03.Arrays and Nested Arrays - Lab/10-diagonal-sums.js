function solve(matrix) {
    let length = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    for (let row = 0; row < length; row++) {
        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][length - 1 - row];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

solve([
    [20, 40],
    [10, 60]
]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);