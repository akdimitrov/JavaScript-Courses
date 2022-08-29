function sumPrimeNonPrime(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (input[index] != "stop") {
        let num = Number(input[index++]);
        if (num < 0) {
            console.log("Number is negative.");
            continue;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);
