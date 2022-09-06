function solve(array) {
    let result = [];
    array.forEach(x => {
        x >= 0 ? result.push(x) : result.unshift(x);
    });

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);