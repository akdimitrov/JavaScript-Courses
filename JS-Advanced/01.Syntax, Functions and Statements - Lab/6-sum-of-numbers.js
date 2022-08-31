function solve(input1, input2) {
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = 0;
    for (let i = num1; i <= num2; i++){
        result += i;
    }

    console.log(result);
}

solve('1', '5');
solve('-8', '20');