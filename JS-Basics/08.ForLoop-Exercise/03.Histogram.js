function histogram(input) {
    const n = Number(input[0]);
    let under200 = 0;
    let under400 = 0;
    let under600 = 0;
    let under800 = 0;
    let above799 = 0;
    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);
        if (num < 200) {
            under200++;
        } else if (num < 400) {
            under400++;
        } else if (num < 600) {
            under600++;
        } else if (num < 800) {
            under800++;
        } else {
            above799++;
        }
    }

    console.log(`${((under200 / n) * 100).toFixed(2)}%`);
    console.log(`${((under400 / n) * 100).toFixed(2)}%`);
    console.log(`${((under600 / n) * 100).toFixed(2)}%`);
    console.log(`${((under800 / n) * 100).toFixed(2)}%`);
    console.log(`${((above799 / n) * 100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);
