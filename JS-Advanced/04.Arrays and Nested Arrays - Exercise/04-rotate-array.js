function rotate(array, rotations) {
    rotations = rotations % array.length;
    for (let r = 0; r < rotations; r++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotate(['1', '2', '3', '4'], 2);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);