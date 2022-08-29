function operationsBetweenNumbers(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];

    if (operator == "+") {
        console.log(`${a} ${operator} ${b} = ${a + b} - ${(a + b) % 2 == 0 ? "even" : "odd"}`);
    } else if (operator == "-") {
        console.log(`${a} ${operator} ${b} = ${a - b} - ${(a - b) % 2 == 0 ? "even" : "odd"}`);
    } else if (operator == "*") {
        console.log(`${a} ${operator} ${b} = ${a * b} - ${(a * b) % 2 == 0 ? "even" : "odd"}`);
    } else if ((operator == "/" || operator == "%") && b == 0) {
        console.log(`Cannot divide ${a} by zero`);
    } else if (operator == "/") {
        console.log(`${a} ${operator} ${b} = ${(a / b).toFixed(2)}`);
    } else if (operator == "%") {
        console.log(`${a} ${operator} ${b} = ${a % b}`);
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
