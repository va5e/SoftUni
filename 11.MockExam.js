//Agency profit

function agencyIncome(input) {

    let avioName = input[0];
    let adultTickets = +input[1];
    let kidsTickets = +input[2];
    let priceAdult = +input[3];
    let tax = +input[4];
    let adultOneTicketPrice = priceAdult + tax;
    let kidsOneTicketPrice = (priceAdult - (priceAdult * 0.7)) + tax;
    let agencyProfit = ((adultOneTicketPrice * adultTickets) + (kidsOneTicketPrice * kidsTickets)) * 0.2;

    console.log(`The profit of your agency from ${avioName} tickets is ${agencyProfit.toFixed(2)} lv.`);
}


//Add bags

function luggageAddition(input) {
    let biggerThan20 = +input[0];
    let kiloLuggage = +input[1];
    let daysUntilTrave = +input[2];
    let countLuggages = +input[3];
    let price;

    if (kiloLuggage < 10) {
        price = biggerThan20 * 0.2;
    } else if (kiloLuggage >= 10 && kiloLuggage <= 20) {
        price = biggerThan20 * 0.5;
    } else if (kiloLuggage > 20) {
        price = biggerThan20;
    }

    if (daysUntilTrave > 30) {
        price *= 1.1;
    } else if (daysUntilTrave >= 7 && daysUntilTrave <= 30) {
        price *= 1.15;
    } else if (daysUntilTrave < 7) {
        price *= 1.4;
    }

    let totalPrice = price * countLuggages;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)
}

//Aluminum Joinery

function windows(input) {
    let numberOfWindows = Number(input[0]);
    let windowsTypes = input[1];
    let deliveryMethod = input[2];
    let total;
    let delivery;
    let price;

    if (numberOfWindows < 10) {
        console.log('Invalid order');
    } else {
        if (deliveryMethod === 'With delivery') {
            delivery = 60;
        } else {
            delivery = 0;
        }

        if (windowsTypes === '90X130') {
            price = 110;
            if (numberOfWindows >= 10 && numberOfWindows <= 30) {
                total = price * numberOfWindows;
            } else if (numberOfWindows > 30 && numberOfWindows <= 60) {
                total = (price * numberOfWindows) * 0.95;
            } else if (numberOfWindows > 60) {
                total = (price * numberOfWindows) * 0.92;
            }
        } else if (windowsTypes === '100X150') {
            price = 140;
            if (numberOfWindows >= 10 && numberOfWindows <= 40) {
                total = price * numberOfWindows;
            } else if (numberOfWindows > 40 && numberOfWindows <= 80) {
                total = (price * numberOfWindows) * 0.94;
            } else if (numberOfWindows > 80) {
                total = (price * numberOfWindows) * 0.90;
            }
        } else if (windowsTypes === '130X180') {
            price = 190;
            if (numberOfWindows >= 10 && numberOfWindows <= 20) {
                total = price * numberOfWindows;
            } else if (numberOfWindows > 20 && numberOfWindows <= 50) {
                total = (price * numberOfWindows) * 0.93;
            } else if (numberOfWindows > 50) {
                total = (price * numberOfWindows) * 0.88;
            }
        } else if (windowsTypes === '200X300') {
            price = 250;
            if (numberOfWindows >= 10 && numberOfWindows <= 25) {
                total = price * numberOfWindows;
            } else if (numberOfWindows > 25 && numberOfWindows <= 50) {
                total = (price * numberOfWindows) * 0.91;
            } else if (numberOfWindows > 50) {
                total = (price * numberOfWindows) * 0.86;
            }
        }

        if (numberOfWindows > 99) {
            total = total + delivery;
            total = total - (total * 0.04);
        } else {
            total = total + delivery;
        }
        console.log(`${total.toFixed(2)} BGN`);
    }
}

//Balls

function balls(input) {
    let numberOfBalls = +input[0];
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColours = 0;
    let dividesFromBlackBalls = 0;

    for (let i = 1; i <= numberOfBalls; i++) {
        switch (input[i]) {
            case 'red': redBalls++; totalPoints += 5; break;
            case 'orange': orangeBalls++; totalPoints += 10; break;
            case 'yellow': yellowBalls++; totalPoints += 15; break;
            case 'white': whiteBalls++; totalPoints += 20; break;
            case 'black': dividesFromBlackBalls++; totalPoints /= 2; break;
            default: otherColours++; continue;
        }
    }
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColours}`);
    console.log(`Divides from black balls: ${dividesFromBlackBalls}`);
}

//Best player

function bestPlayer(input) {
    let arrNames = [];
    let arrGoals = [];

    for (let i = 0; i < 100000; i++) {
        if (input[i] === 'END') {
            break;
        }

        if (input[i] >= 10) {
            console.log(`${input[i - 1]} is the best player!`)
            console.log(`He has scored ${input[i]} goals and made a hat-trick !!!`)
            arrGoals.push(input[i])
            break;
        }

        if (i % 2 !== 0) {
            arrGoals.push(input[i])
        } else {
            arrNames.push(input[i])
        }
    }
    if (!(arrGoals.some(el => el >= 10))) {

        arrGoals = arrGoals.map(Number);
        let biggestGoal = Math.max(...arrGoals);
        console.log(`${arrNames[arrGoals.indexOf(biggestGoal)]} is the best player!`)

        if (biggestGoal >= 3) {
            console.log(`He has scored ${biggestGoal} goals and made a hat-trick !!!`)
        } else {
            console.log(`He has scored ${biggestGoal} goals.`)
        }
    }
}


//Barcode generator

function barcode(input) {
    let n1 = input[0];
    let n2 = input[1];
    let a = Number(input[0][0])
    let a1 = Number(input[0][1])
    let a2 = Number(input[0][2])
    let a3 = Number(input[0][3])
    let b = Number(input[1][0])
    let b1 = Number(input[1][1])
    let b2 = Number(input[1][2])
    let b3 = Number(input[1][3])
    let string = '';

    for (let i = a; i <= b; i++) {
        for (let j = a1; j <= b1; j++) {
            for (let k = a2; k <= b2; k++) {
                for (let l = a3; l <= b3; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        string += '' + i + j + k + l + ' ';

                    }
                }
            }
        }
    }
    console.log(string);
}
