function solve(num1, num2) {
    let greaterNum = Math.max(num1, num2);
    let divisor;
    for (let i = greaterNum; i > 0; i--){
        if (num1 % i == 0 && num2 % i == 0) {
            divisor = i;
            break;
        }
    }

    console.log(divisor);
}

solve(15, 5);
solve(2154, 458);