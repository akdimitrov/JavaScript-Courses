function solve(length, k) {
    let sequence = [1];
    for (let i = 1; i < length; i++) {
        let startIndex = i - k < 0 ? 0 : i - k; 
        let element = sequence.slice(startIndex).reduce((x,y) => x + y);
        sequence.push(element);
    }

    return sequence;
}

console.log(solve(6, 3));
console.log(solve(8, 2));