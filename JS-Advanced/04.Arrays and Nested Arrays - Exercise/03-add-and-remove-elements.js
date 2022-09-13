function solve(array) {
    let result = [];
    let number = 1;
    for (const command of array) {
        if (command == 'add') {
            result.push(number);
        }else if (command == 'remove') {
            result.pop(number);
        }

        number++;
    }

    let output = result.length > 0 ? result.join('\n') : 'Empty';
    console.log(output);
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']); 