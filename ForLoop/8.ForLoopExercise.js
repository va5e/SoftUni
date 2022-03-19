//Number ending in 7

function numSevenLoop() {

    for (let i = 1; i < 1000; i++) {

        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

//Multiplication table

function multiplicationTable(input) {
    let num = +input[0];

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
}

//Histogram

function hristogram(input) {
    let count = +input[0];
    let below200 = 0;
    let above200below400 = 0;
    let above400below600 = 0;
    let above600below800 = 0;
    let above800below1000 = 0;

    for (let i = 1; i <= count; i++) {
        if (+input[i] < 200) {
            below200++;
        } else if (+input[i] >= 200 && +input[i] < 400) {
            above200below400++;
        } else if (+input[i] >= 400 && +input[i] < 600) {
            above400below600++;
        } else if (+input[i] >= 600 && +input[i] < 800) {
            above600below800++;
        } else if (+input[i] >= 800) {
            above800below1000++;
        }
    }
    console.log(`${(below200 / count * 100).toFixed(2)}%`);
    console.log(`${(above200below400 / count * 100).toFixed(2)}%`);
    console.log(`${(above400below600 / count * 100).toFixed(2)}%`);
    console.log(`${(above600below800 / count * 100).toFixed(2)}%`);
    console.log(`${(above800below1000 / count * 100).toFixed(2)}%`);
}

//Clever Lily

function lilitu(input) {
    let age = +input[0];
    let priceWashing = +input[1];
    let priceToy = +input[2];
    let collectedMoney = 0;
    let countToys = 0;
    let countMoneyTaken = 0;
    let upgrade = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            collectedMoney += upgrade;
            countMoneyTaken++
            upgrade = upgrade + 10;
        } else {
            countToys++
        }
    }

    let total = (collectedMoney - countMoneyTaken) + (countToys * priceToy);
    let diff = Math.abs(total - priceWashing);
    if (total >= priceWashing) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}

//Salary

function salary(input) {
    let numberOfSites = +input[0];
    let salary = +input[1];
    let fee = 0;

    for (let i = 0; i <= numberOfSites; i++) {
        if ((salary - fee) <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
        if (input[i + 2] === 'Facebook') {
            fee += 150;
        } else if (input[i + 2] === 'Instagram') {
            fee += 100;
        } else if (input[i + 2] === 'Reddit') {
            fee += 50;
        }
    }
    let total = salary - fee;
    if (total >= 1) {
        console.log(Math.trunc(total));
    }
}

//Oscars

function oscars(input) {
    let actorName = input[0];
    let academyPoints = +input[1];
    let countOfJury = +input[2];
    let points = academyPoints;
    let juryNamesArr = [];
    let pointsArr = [];

    for (let i = 1; i <= countOfJury + countOfJury; i++) {
        if (i % 2 != 0) {
            juryNamesArr.push(input[i + 2]);
            pointsArr.push(input[i + 3]);
        }
    }
    for (let i = 0; i < pointsArr.length; i++) {

        points += (pointsArr[i] * juryNamesArr[i].length) / 2;

        if (points.toFixed(1) > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (points < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(Math.abs(points - 1250.5)).toFixed(1)} more!`);
    }
}

//Trekking Mania

function climbers(input) {
    let countGroups = +input[0];
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= countGroups; i++) {

        totalPeople += +input[i];
        let a = +input[i]

        if (a <= 5)
            musala += +input[i];
        if (a > 5 && a <= 12)
            monblan += +input[i];
        if (a > 12 && a <= 25)
            kilimandjaro += +input[i];
        if (a > 25 && a <= 40)
            k2 += +input[i];
        if (a > 40)
            everest += +input[i];
    }
    console.log((musala / totalPeople * 100).toFixed(2) + '%');
    console.log((monblan / totalPeople * 100).toFixed(2) + '%');
    console.log((kilimandjaro / totalPeople * 100).toFixed(2) + '%');
    console.log((k2 / totalPeople * 100).toFixed(2) + '%');
    console.log((everest / totalPeople * 100).toFixed(2) + '%');
}

//Tennis Ranklist

function grisho(input) {
    let countTournamets = +input[0];
    let startingPoints = +input[1];
    let resultArr = [];
    let w = 0;

    for (let i = 2; i < countTournamets + 2; i++) {
        resultArr.push(input[i])
    }

    for (let i = 0; i < countTournamets; i++) {
        let test = resultArr[i];
        switch (test) {
            case 'W': startingPoints += 2000; w++; break;
            case 'F': startingPoints += 1200; break;
            case 'SF': startingPoints += 720; break;
        }
    }

    console.log('Final points: ' + startingPoints);
    console.log(`Average points: ${Math.floor((startingPoints - (+input[1])) / countTournamets)}`)
    console.log((w / countTournamets * 100).toFixed(2) + '%');
}
