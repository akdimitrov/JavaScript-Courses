function solve(input) {
    let words = input.toUpperCase().split(/[\s.,!?]+/).filter(x => x);
    console.log(words.join(', '));
}

solve('Hi, how are you?');
solve('hello');