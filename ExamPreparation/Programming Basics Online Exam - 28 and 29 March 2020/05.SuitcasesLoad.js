function suitcasesLoad(input) {
    let index = 0;
    let count = 0;
    let capacity = Number(input[index++]);
    let info = input[index++];
    while (info != "End") {
        count++;
        let suitcaseVolume = Number(info);
        if (count % 3 == 0) {
            suitcaseVolume *= 1.1;
        }

        capacity -= suitcaseVolume;
        if (capacity < 0) {
            count--;
            break;
        }

        info = input[index++];
    }

    if (capacity >= 0) {
        console.log("Congratulations! All suitcases are loaded!");
    } else {
        console.log("No more space!");
    }

    console.log(`Statistic: ${count} suitcases loaded.`);
}

suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
