function solve(input) {
    let elementsAtEvenIndex = input.filter((element, i) => i % 2 == 0);


    console.log(elementsAtEvenIndex.join(' '));
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);