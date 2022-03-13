//Pipes in pool

function poolTubes(input) {
    let V = +input[0];
    let debitT1zaChas = +input[1];
    let debitT2zaChas = +input[2];
    let workerHMissing = +input[3];
    let debitTruba1DokatoRabotnikaGoNqma = debitT1zaChas * workerHMissing;
    let debitTruba2DokatoRabotnikaGonqma = debitT2zaChas * workerHMissing;
    let howMuchWaterWhenHeGetsBack = debitTruba2DokatoRabotnikaGonqma + debitTruba1DokatoRabotnikaGoNqma;

    if (howMuchWaterWhenHeGetsBack <= V) {
        console.log(`The pool is ${((howMuchWaterWhenHeGetsBack / V) * 100).toFixed(2)}% full. Pipe 1: ${((debitTruba1DokatoRabotnikaGoNqma / howMuchWaterWhenHeGetsBack) * 100).toFixed(2)}%. Pipe 2: ${((debitTruba2DokatoRabotnikaGonqma / howMuchWaterWhenHeGetsBack) * 100).toFixed(2)}%.`)
    } else {
        console.log(`For ${workerHMissing} hours the pool overflows with ${(Math.abs(V - howMuchWaterWhenHeGetsBack)).toFixed(2)} liters.`)
    }
}

//Sleepy Tom cat

function sleepyTom(input) {
    let nFreeDays = +input[0];
    let workingDays = 365 - nFreeDays;
    let totalMinutesOfPlay = (nFreeDays * 127) + (workingDays * 63);
    let diff = Math.abs(30000 - totalMinutesOfPlay);
    let diffHours = Math.trunc(diff / 60);
    let diffMinutes = diff % 60;

    if (totalMinutesOfPlay > 30000) {
        console.log(`Tom will run away`);
        console.log(`${diffHours} hours and ${diffMinutes} minutes more for play`)
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${diffHours} hours and ${diffMinutes} minutes less for play`)
    }
}

//Harvest

function harvest(input) {
    let squareM = +input[0];
    let grozde1M2 = +input[1];
    let neededWine = +input[2];
    let nWorkers = +input[3];
    let sqrMForGrozde = squareM * 0.40;
    let kgGrozdeEarned = sqrMForGrozde * grozde1M2;
    let literWine = kgGrozdeEarned / 2.5;

    if (literWine >= neededWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(literWine)} liters.`)
        console.log(`${Math.ceil(literWine - neededWine)} liters left -> ${Math.ceil((literWine - neededWine) / nWorkers)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(literWine - neededWine))} liters wine needed.`)
    }
}

//Transport price

function transportPrice(input) {
    let kilometres = +input[0];
    let dayNight = input[1];

    if (kilometres < 20) {
        let taxi = 0;
        if (dayNight === 'day') {
            taxi = 0.70 + (kilometres * 0.79);
            console.log(taxi.toFixed(2));
        } else {
            taxi = kilometres * 0.90 + 0.70;
            console.log(taxi.toFixed(2));
        }
    } else if (kilometres < 100) {
        let bus = kilometres * 0.09;
        console.log(bus.toFixed(2));
    } else if (kilometres >= 100) {
        let train = kilometres * 0.06;
        console.log(train.toFixed(2))
    }
}

//Firm

function company(input) {
    let hNeeded = +input[0];
    let daysCompanyHas = +input[1];
    let workersWorkingExtra = +input[2];
    let availableDays = daysCompanyHas * 0.9;
    let workingHours = Math.floor(availableDays * 8);
    let extraHours = Math.floor(workersWorkingExtra * (daysCompanyHas * 2));
    let allWorkingHours = workingHours + extraHours;
    let diff = Math.abs(hNeeded - allWorkingHours);

    if (hNeeded <= allWorkingHours) {
        console.log(`Yes!${diff} hours left.`)
    } else {
        console.log(`Not enough time!${diff} hours needed.`)
    }
}

//Pets

function pets(input) {
    let nDays = +input[0];
    let foodLeftKg = +input[1];
    let dogPerDay = +input[2];
    let catPerDay = +input[3];
    let turtlePerDayInGrams = +input[4];
    let kgDog = nDays * dogPerDay;
    let kgCat = nDays * catPerDay;
    let kgTurtle = nDays * turtlePerDayInGrams / 1000;
    let total = kgDog + kgCat + kgTurtle;

    if (total <= foodLeftKg) {
        console.log(`${Math.floor(foodLeftKg - total)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(Math.abs(total - foodLeftKg))} more kilos of food are needed.`)
    }
}

//Flower shop

function flowersShop(input) {
    let magnolii = +input[0];
    let zyumbyuli = +input[1];
    let rozi = +input[2];
    let cactusi = +input[3];
    let giftPrice = +input[4];
    let totalEarned = ((magnolii * 3.25) + (zyumbyuli * 4) + (rozi * 3.5) + (cactusi * 8)) * 0.95;

    if (totalEarned >= giftPrice) {
        console.log(`She is left with ${Math.floor(Math.abs(totalEarned - giftPrice))} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(Math.abs(totalEarned - giftPrice))} leva.`)
    }
}

//Fuel Tank

function fuelRezervior(input) {
    let type = input[0];
    let litersUHave = +input[1];

    if ((type === 'Diesel' || type === 'Gasoline' || type === 'Gas') && litersUHave >= 25) {
        console.log(`You have enough ${type.toLowerCase()}.`)
    } else if ((type === 'Diesel' || type === 'Gasoline' || type === 'Gas') && litersUHave < 25) {
        console.log(`Fill your tank with ${type.toLowerCase()}!`)
    } else {
        console.log(`Invalid fuel!`);
    }
}

//Fuel Tank part 2

function fuelRezerviorPartTwo(input) {
    let type = input[0];
    let litres = +input[1];
    let clubCard = input[2];
    let fuelTotalPrice = 0;

    switch (type) {
        case 'Gas': clubCard === 'Yes' ? fuelTotalPrice = litres * 0.85 : fuelTotalPrice = litres * 0.93; break;
        case 'Gasoline': clubCard === 'Yes' ? fuelTotalPrice = litres * 2.04 : fuelTotalPrice = litres * 2.22; break;
        case 'Diesel': clubCard === 'Yes' ? fuelTotalPrice = litres * 2.21 : fuelTotalPrice = litres * 2.33; break;
    }
    if (litres >= 20 && litres <= 25) {
        fuelTotalPrice *= 0.92;
    } else if (litres > 25) {
        fuelTotalPrice *= 0.9;
    }
    console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
}