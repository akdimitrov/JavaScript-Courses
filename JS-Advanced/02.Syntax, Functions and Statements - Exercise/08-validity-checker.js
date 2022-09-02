function solve(x1, y1, x2, y2) {
    const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const status = (x1, y1, x2, y2) => Number.isInteger(distance(x1, y1, x2, y2)) ? 'valid' : 'invalid';
    const format = (x1, y1, x2, y2) => `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status(x1, y1, x2, y2)}`;

    console.log(format(x1, y1, 0, 0));
    console.log(format(x2, y2, 0, 0));
    console.log(format(x1, y1, x2, y2));
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);