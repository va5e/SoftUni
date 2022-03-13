// Sum seconds

function seconds(input) {
    let secOne = +input[0];
    let secTwo = +input[1];
    let secThree = +input[2];
    let sumSummary = secOne + secTwo + secThree;

    if (sumSummary < 10) {
        console.log(`0:0${sumSummary}`);
    } else if (sumSummary < 60) {
        console.log(`0:${sumSummary}`);
    } else if (sumSummary >= 60) {
        let minutes = Math.floor(sumSummary / 60);
        let seconds = sumSummary % 60;
        if (seconds < 10) {
            console.log(`${minutes}:0${seconds}`)
        } else {
            console.log(`${minutes}:${seconds}`);
        }
    }
}

//Bonus score

function bonusPoints(input) {
    let points = +input[0];
    let bonus = 0;

    if (points <= 100) {
        bonus += 5;
    } else if (points > 1000) {
        bonus = points * 0.1;
    } else {
        bonus = points * 0.2;
    }
    if (points % 2 === 0) {
        let extraBonus = 1;
        bonus += extraBonus
    } else if (points % 10 === 5) {
        extraBonus = 2;
        bonus += extraBonus
    }
    console.log(bonus);
    console.log(bonus + points);
}

//Time + 15 minutes

function hourPlus15(input) {
    let hours = +input[0];
    let minutes = +input[1];
    let sumAllMinutes = hours * 60 + minutes + 15;
    let upedHours = Math.floor(sumAllMinutes / 60);
    let upedMinutes = sumAllMinutes % 60;

    if (upedHours === 24) {
        upedHours = 0;
    }
    if (upedMinutes < 10) {
        console.log(`${upedHours}:0${upedMinutes}`);
    } else {
        console.log(`${upedHours}:${upedMinutes}`);
    }
}

//Toy shop

function toys(input) {
    let travelPrice = +input[0];
    let numPuzzle = +input[1];
    let numDoll = +input[2];
    let numBears = +input[3];
    let numMinions = +input[4];
    let numTrucks = +input[5];
    let numberOfToys = numPuzzle + numDoll + numBears + numMinions + numTrucks;
    let total = numPuzzle * 2.6 + numDoll * 3 + numBears * 4.1 + numMinions * 8.2 + numTrucks * 2;

    if (numberOfToys >= 50) {
        total = total * 0.75;
    }

    total = total * 0.9;
    let diff = Math.abs(total - travelPrice);
    if (total >= travelPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

//Godzilla vs. Kong

function godzillaVSKingKong(input) {
    let movieBudget = input[0];
    let extras = input[1];
    let pricePer1Extra = input[2];
    let decor = movieBudget * 0.1;
    let priceForClothing = extras * pricePer1Extra;

    if (extras > 150) {
        priceForClothing = priceForClothing * 0.9;
    }

    let totalNeedCash = decor + priceForClothing;
    let diff = Math.abs(movieBudget - totalNeedCash);

    if (movieBudget >= totalNeedCash) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

//World swimming record

function ivanchoPluveca(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);
    let slowTime = Math.floor(distanceInMeters / 15) * (12.5);
    let ivanchoTime = (distanceInMeters * timeInSecondsForOneMeter) + slowTime;
    let diff = Math.abs(recordInSeconds - ivanchoTime);

    if (ivanchoTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}

//Shopping

function pazaruvane(input) {
    let budget = Number(input[0]);
    let numGpu = Number(input[1]);
    let numCpu = Number(input[2]);
    let numRAM = Number(input[3]);
    let priceGpu = 250;
    let boughtGpu = priceGpu * numGpu;
    let priceCpu = boughtGpu * 0.35;
    let priceRAM = boughtGpu * 0.1;
    let total = boughtGpu + (priceCpu * numCpu) + (priceRAM * numRAM);

    if (numGpu > numCpu) {
        total *= 0.85;
    }

    if (total <= budget) {
        console.log(`You have ${(Math.abs(budget - total)).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(Math.abs(budget - total)).toFixed(2)} leva more!`)
    }
}

//Lunch break

function lunchBreak(input) {
    let nameOfSeries = input[0];
    let episodeLength = +input[1];
    let restDuration = +input[2];
    let lunchDuration = restDuration * 0.125;
    let chillDuration = restDuration * 0.25;
    let timeToWatch = restDuration - lunchDuration - chillDuration;

    if (timeToWatch >= episodeLength) {
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(Math.abs(timeToWatch - episodeLength))} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(Math.abs(timeToWatch - episodeLength))} more minutes.`)
    }
}