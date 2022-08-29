function cake(input) {
    let index = 0;
    let cakePieces = Number(input[index++]) * Number(input[index++]);
    let command = input[index++];
    while (command != "STOP" && cakePieces > 0) {
        cakePieces -= Number(command);
        command = input[index++];
    }

    if(cakePieces >= 0){
        console.log(`${cakePieces} pieces are left.`)
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
