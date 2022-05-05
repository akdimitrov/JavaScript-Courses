function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let statues = rent * 0.7;
    let catering = statues * 0.85;
    let sounding = catering * 0.5;
    let total = rent + statues + catering + sounding;
    console.log(total.toFixed(2));
}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);
