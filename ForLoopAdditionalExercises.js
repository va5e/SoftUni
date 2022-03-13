//Back to the past

function backToTheFuture(input) {
    let inheritedMoney = +input[0];
    let yearHeMustLive = +input[1];
    let currentYear = 1800;

    for (let i = currentYear; i <= yearHeMustLive; i++) {
        if (i % 2 === 0) {
            inheritedMoney = inheritedMoney - 12000;
        } else {
            inheritedMoney = inheritedMoney - (12000 + (50 * (18 + i % 1800)))
        }
    }
    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(Math.abs(inheritedMoney)).toFixed(2)} dollars to survive.`)
    }
}

//Hospital

function hospital(input) {
    let count = +input[0];
    let unTreated = 0;
    let treatenedPat = 0;
    let doctors = 7;

    for (let i = 1; i <= count; i++) {

        if (i % 3 === 0 && unTreated > treatenedPat) {
            doctors++;
        }

        if (+input[i] > doctors) {
            treatenedPat += doctors;
            unTreated += (+input[i] - doctors)
        } else {
            treatenedPat += +input[i];
        }
    }
    console.log(`Treated patients: ${treatenedPat}.`);
    console.log(`Untreated patients: ${unTreated}.`);
}

//Logistics

function logistics(input) {
    let count = +input[0];
    let micro = 0;
    let kamion = 0;
    let vlak = 0;

    for (let i = 1; i <= count; i++) {
        if (+input[i] <= 3) {
            micro += +input[i];
        } else if (+input[i] > 3 && +input[i] <= 11) {
            kamion += +input[i];
        } else {
            vlak += +input[i];
        }
    }

    let totalTons = micro + kamion + vlak;
    let avgPriceTon = ((micro * 200) + (kamion * 175) + (vlak * 120)) / totalTons;

    console.log(`${avgPriceTon.toFixed(2)}`);
    console.log(`${(micro / totalTons * 100).toFixed(2)}%`);
    console.log(`${(kamion / totalTons * 100).toFixed(2)}%`);
    console.log(`${(vlak / totalTons * 100).toFixed(2)}%`);
}

//Grades

function grades(input) {
    let count = +input[0];
    let arrGrades = [];
    let top = 0;
    let fourTo499 = 0;
    let threeTo399 = 0;
    let fail = 0;
    let average;

    for (let i = 1; i <= count; i++) {
        arrGrades.push(+input[i])
    }

    for (let j = 0; j < arrGrades.length; j++) {
        if (arrGrades[j] >= 5) {
            top++
        } else if (arrGrades[j] < 5 && arrGrades[j] >= 4) {
            fourTo499++
        } else if (arrGrades[j] < 4 && arrGrades[j] >= 3) {
            threeTo399++
        } else if (arrGrades[j] < 3) {
            fail++
        }
    }
    average = (arrGrades.reduce((a, b) => a + b)) / count;

    console.log(`Top students: ${(top / count * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(fourTo499 / count * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(threeTo399 / count * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / count * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}


//Game of intervals

function gameOfIntevals(input) {
    let count = +input[0];
    let zeroTo9 = 0;
    let TenTo19 = 0;
    let twentyTo29 = 0;
    let thirtyTo39 = 0;
    let fortyTo50 = 0;
    let invalid = 0;
    let result = 0;

    for (let i = 1; i <= count; i++) {

        if (+input[i] >= 0 && +input[i] < 10) {
            result += (+input[i] * 0.20);
            zeroTo9++;
        } else if (+input[i] >= 10 && +input[i] < 20) {
            result += (+input[i] * 0.30);
            TenTo19++;
        } else if (+input[i] >= 20 && +input[i] < 30) {
            result += (+input[i] * 0.40);
            twentyTo29++;
        } else if (+input[i] >= 30 && +input[i] < 40) {
            result += 50;
            thirtyTo39++;
        } else if (+input[i] >= 40 && +input[i] <= 50) {
            result += 100;
            fortyTo50++;
        } else if (+input[i] < 0 || +input[i] > 50) {
            result /= 2;
            invalid++
        }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(zeroTo9 / count * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(TenTo19 / count * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(twentyTo29 / count * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(thirtyTo39 / count * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(fortyTo50 / count * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(invalid / count * 100).toFixed(2)}%`)
}

//Bills

function monthlyFees(input) {
    let numMonths = Number(input[0]);
    let electro = 0;
    let water = (numMonths * 20);
    let internet = (numMonths * 15);

    for (let i = 1; i <= numMonths; i++) {
        electro += +input[i];
    }

    let others = (+electro + +water + +internet) * 1.2;

    console.log(`Electricity: ${electro.toFixed(2)} lv`)
    console.log(`Water: ${water.toFixed(2)} lv`)
    console.log(`Internet: ${internet.toFixed(2)} lv`)
    console.log(`Other: ${others.toFixed(2)} lv`)
    console.log(`Average: ${((others + water + internet + electro) / numMonths).toFixed(2)} lv`)
}

//Football League

function footballTournament(input) {
    let stadiumCapacity = +input[0];
    let numFans = +input[1];
    let arrFans = [];
    let fansA = 0;
    let fansV = 0;
    let fansB = 0;
    let fansG = 0;

    for (let i = 0; i < numFans; i++) {
        arrFans.push(input[i + 2])
    }

    for (let i = 0; i < arrFans.length; i++) {
        if (arrFans[i] === 'A') {
            fansA++
        } else if (arrFans[i] === 'V') {
            fansV++
        } else if (arrFans[i] === 'B') {
            fansB++
        } else {
            fansG++
        }
    }
    console.log(`${(fansA / numFans * 100).toFixed(2)}%`);
    console.log(`${(fansB / numFans * 100).toFixed(2)}%`);
    console.log(`${(fansV / numFans * 100).toFixed(2)}%`);
    console.log(`${(fansG / numFans * 100).toFixed(2)}%`);
    console.log(`${(numFans / stadiumCapacity * 100).toFixed(2)}%`);
}

//Equal pairs

function equalPairs(input) {
    let count = +input[0];
    let arr = [];

    for (let i = 1; i <= count + count; i++) {
        arr.push(+input[i] + +input[i + 1])
        i++
    }

    let arrEqual = arr.every(a => a === arr[0]);
    let arrTwo = []

    for (let i = 0; i < arr.length - 1; i++) {

        arrTwo.push(Math.abs(arr[i] - arr[i + 1]))
    }

    if (arrEqual) {
        console.log(`Yes, value=${arr[0]}`)
    } else {
        console.log(`No, maxdiff=${Math.max(...arrTwo)}`)
    }
}

//Clock

function clock(input) {
    let hours = 0;
    let minutes = 0;

    while (hours != 24) {
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours < 24) {
            console.log(`${hours} : ${minutes}`)
            minutes++
        }
    }
}

//Clock part 2

function clock(input) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    while (hours != 24) {
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }

        if (hours < 24) {
            console.log(`${hours} : ${minutes} : ${seconds}`)
            seconds++
        }
    }
}

//Odd even position

function oddAndEvenPositions(input) {
    let counter = +input[0];
    let oddArr = [];
    let evenArr = [];

    for (let i = 1; i <= counter; i++) {
        if (i % 2 != 0) {
            oddArr.push(+input[i])
        } else {
            evenArr.push(+input[i]);
        }
    }

    let oddSum = oddArr.reduce((a, b) => a + b, 0).toFixed(2);
    let oddMin = Math.min(...oddArr).toFixed(2);
    let oddMax = Math.max(...oddArr).toFixed(2);
    let evenSum = evenArr.reduce((a, b) => a + b, 0).toFixed(2);
    let evenMin = Math.min(...evenArr).toFixed(2);
    let evenMax = (Math.max(...evenArr)).toFixed(2);

    if (counter === 0) {
        oddMin = 'No'
        oddMax = 'No'
        evenMax = 'No'
        evenMin = 'No'
    } else if (counter === 1) {
        evenMin = 'No';
        evenMax = 'No';
    }
    console.log(`OddSum=${oddSum},`)
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum},`)
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}