function solve(input) {
    let words = input.toUpperCase().match(/\w+/gm);
    console.log(words.join(', '));
}

solve('Hi, how are you?');
solve('hello');