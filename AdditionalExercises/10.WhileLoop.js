//Dishwasher

function dishWasher(input) {
    let numBottles = +input[0] * 750;
    let index = 1;
    let washedPots = 0;
    let washedDishes = 0;

    while (true) {
        if (input[index] === 'End') {
            break;
        }

        if (numBottles < 0) {
            break;
        }

        if (index % 3 === 0) {
            let test = +input[index] * 15
            numBottles = numBottles - test;
            washedPots += +input[index];
        } else {
            let test = +input[index] * 5
            numBottles = numBottles - test;
            washedDishes += +input[index];
        }
        index++
    }

    if (numBottles >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${washedDishes} dishes and ${washedPots} pots were washed.`)
        console.log(`Leftover detergent ${numBottles} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(numBottles)} ml. more necessary!`)
    }
}

//Payment system

function paymentSystem(input) {
    let sumNeeded = +input[0];
    let index = 1;
    let moneyEarned = 0;
    let payedWithCard = 0;
    let payedCash = 0;
    let countCard = 0;
    let countCash = 0;

    while (true) {
        if (input[index] === 'End') {
            console.log(`Failed to collect required money for charity.`)
            break;
        }
        if (moneyEarned >= sumNeeded) {
            console.log(`Average CS: ${(payedCash / countCash).toFixed(2)}`)
            console.log(`Average CC: ${(payedWithCard / countCard).toFixed(2)}`)
            break;
        }
        if (index % 2 != 0 && +input[index] <= 100) {
            console.log(`Product sold!`)
            moneyEarned += +input[index];
            payedCash += +input[index];
            countCash++
            index++
        } else if (index % 2 != 0 && +input[index] > 100) {
            console.log(`Error in transaction!`)
            index++
        } else if (index % 2 === 0 && +input[index] >= 10) {
            console.log(`Product sold!`)
            moneyEarned += +input[index];
            payedWithCard += +input[index];
            countCard++
            index++
        } else {
            console.log(`Error in transaction!`)
            index++
        }
    }
}

//Average number


function avg(input) {
    let count = +input[0];
    let sum = 0;

    for (let i = 1; i <= count; i++) {
        sum += +input[i]
    }
    console.log((sum / count).toFixed(2))
}


//Numbers devided by 3 without reminder

function oneTo100(input) {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

//Stream of letters

function letterFlow(input) {
    let string = '';
    let currentString = '';
    let index = 0;
    let n = 0;
    let c = 0;
    let o = 0;
    let i = 0;
    let arr = [];
    string = string.replace(/[^a-zA-Z0-9]/g, '');

    while (input[i] != undefined) {
        arr.push(input[i])
        i++
    }

    let end = arr[arr.length - 1]
    arr.pop(arr.length - 1)
    arr = arr.join('');
    arr = arr.replace(/[^a-zA-Z0-9]/g, '')
    arr = arr.split('')
    arr.push(end)

    while (true) {

        if (n + c + o === 3) {
            string = (string + currentString) + ' ';
            n = 0;
            c = 0;
            o = 0;
            currentString = ''
        }
        if (arr[index] === 'End') {
            break;
        }
        if (arr[index] === 'n' && n < 1) {
            n++
            index++
            continue;
        } else if (arr[index] === 'c' && c < 1) {
            c++
            index++
            continue;
        } else if (arr[index] === 'o' && o < 1) {
            o++
            index++
            continue;
        } else {
            currentString = currentString + arr[index]
        }
        index++
    }
    console.log(string)
}

