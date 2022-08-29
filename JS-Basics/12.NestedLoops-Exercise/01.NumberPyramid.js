function numberPyramid(input) {
    const n = Number(input[0]);
    let num = 1;

    for (let row = 0; row < n; row++) {
        let line = "";
        for (let col = 0; col < row + 1; col++) {
            if (num > n) {
                row = n;
                break;
            }
            
            line += `${num++} `;
        }

        console.log(line);
    }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);
