function calcTime(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let totalTime = projects * 3;
    console.log(`The architect ${name} will need ${totalTime} hours to complete ${projects} project/s.`);
}

calcTime(["George", "4"]);