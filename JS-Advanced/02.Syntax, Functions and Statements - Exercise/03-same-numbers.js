function solve(num) {
    let result = true;
    let digit = num % 10;
    let sum = 0;
    while (num > 0) {
        let currDigit = num % 10;
        num = Math.floor(num / 10);

        sum += currDigit;
        if(currDigit != digit){
            result = false;
        }
    }

    console.log(result);
    console.log(sum);


}

solve(2222222);
solve(1234);