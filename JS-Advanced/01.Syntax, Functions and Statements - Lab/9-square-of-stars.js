function printRectangle(size = 5) {
    for (let row = 0; row < size; row++){
        console.log('* '.repeat(size));
    }
}

printRectangle();
printRectangle(1);