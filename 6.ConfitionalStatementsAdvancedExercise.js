//Cinema

function cinema(input) {
    let type = input[0];
    let rows = +input[1];
    let colons = +input[2];
    let profit;

    if (type === 'Premiere') {
        profit = (rows * colons) * 12;
    } else if (type === 'Normal') {
        profit = (rows * colons) * 7.5;
    } else { profit = (rows * colons) * 5; }

    console.log(profit.toFixed(2));
}

//Summer Outfit

function summerOutfit(input) {
    let degrees = +input[0];
    let time = input[1];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        switch (time) {
            case 'Morning': outfit = 'Sweatshirt'; shoes = 'Sneakers'; break;
            case 'Afternoon': outfit = 'Shirt'; shoes = 'Moccasins'; break;
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (time) {
            case 'Morning': outfit = 'Shirt'; shoes = 'Moccasins'; break;
            case 'Afternoon': outfit = 'T-Shirt'; shoes = 'Sandals'; break;
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;
        }
    } else {
        switch (time) {
            case 'Morning': outfit = 'T-Shirt'; shoes = 'Sandals'; break;
            case 'Afternoon': outfit = 'Swim Suit'; shoes = 'Barefoot'; break;
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

//New house

function newHouse(input) {
    let type = input[0];
    let numFlowers = +input[1];
    let budget = +input[2];
    let finalPrice = 0;
    const flowers = {
        rose: 5,
        dalia: 3.80,
        lale: 2.80,
        narcis: 3,
        gladiola: 2.50
    }

    switch (type) {
        case 'Roses': (numFlowers > 80) ?
            finalPrice = (numFlowers * flowers.rose) * 0.9 :
            finalPrice = (numFlowers * flowers.rose);
            break;
        case 'Dahlias': (numFlowers > 90) ?
            finalPrice = (numFlowers * flowers.dalia) * 0.85 :
            finalPrice = (numFlowers * flowers.dalia);
            break;
        case 'Tulips': (numFlowers > 80) ?
            finalPrice = (numFlowers * flowers.lale) * 0.85 :
            finalPrice = (numFlowers * flowers.lale);
            break;
        case 'Narcissus': (numFlowers < 120) ?
            finalPrice = (numFlowers * flowers.narcis) * 1.15 :
            finalPrice = (numFlowers * flowers.narcis);
            break;
        case 'Gladiolus': (numFlowers < 80) ?
            finalPrice = (numFlowers * flowers.gladiola) * 1.20 :
            finalPrice = (numFlowers * flowers.gladiola)
            break;
    }

    let diff = Math.abs(budget - finalPrice);

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${type} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}


//Fishing boat

function fishers(input) {
    let budget = +input[0];
    let season = input[1];
    let numFishers = +input[2];
    let price;

    switch (season) {
        case 'Spring': price = 3000;
            if (numFishers <= 6) {
                price *= 0.9
            } else if (numFishers > 6 && numFishers <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }; break;
        case 'Summer': price = 4200;
            if (numFishers <= 6) {
                price *= 0.9
            } else if (numFishers > 6 && numFishers <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;
        case 'Autumn': price = 4200;
            if (numFishers <= 6) {
                price *= 0.9
            } else if (numFishers > 6 && numFishers <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;
        case 'Winter': price = 2600;
            if (numFishers <= 6) {
                price *= 0.9
            } else if (numFishers > 6 && numFishers <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;
    }

    if (numFishers % 2 === 0 && season != 'Autumn') {
        price *= 0.95;
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}

//Journey

function vacation(input) {
    let budget = +input[0];
    let season = input[1];
    let destination;
    let acomodation;
    let moneyLeft = 0;

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            moneyLeft = budget * 0.7;
            acomodation = 'Camp'
        } else {
            moneyLeft = budget * 0.3
            acomodation = 'Hotel'
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            moneyLeft = budget * 0.6
            acomodation = 'Camp'
        } else {
            moneyLeft = budget * 0.2
            acomodation = 'Hotel'
        }
    } else {
        destination = 'Europe'
        moneyLeft = budget * 0.1
        acomodation = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${acomodation} - ${(budget - moneyLeft).toFixed(2)}`)
}

//Operations between numbers

function numOp(input) {
    let n1 = +input[0];
    let n2 = +input[1];
    let operator = input[2];
    let evenOrOdd;

    if (operator === '+') {
        if ((n1 + n2) % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${n1} + ${n2} = ${n1 + n2} - ${evenOrOdd} `)

    } else if (operator === '-') {
        if ((n1 - n2) % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${n1} - ${n2} = ${n1 - n2} - ${evenOrOdd} `)

    } else if (operator === '*') {
        if ((n1 * n2) % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${n1} * ${n2} = ${n1 * n2} - ${evenOrOdd} `)

    } else if (operator === '%') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} % ${n2} = ${n1 % n2}`)
        }
    } else if (operator === '/') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else { console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`) }
    }
}

//Hotel room

function hotelRoom(input) {
    let month = input[0];
    let countNights = input[1];
    let priceStudio;
    let priceApartment;
    let finalStudio;
    let finalApartment;

    switch (month) {
        case 'May':
        case 'October':
            priceApartment = 65;
            priceStudio = 50;
            if (countNights > 14) {
                finalStudio = (priceStudio * countNights) * 0.70;
            } else if (countNights > 7) {
                finalStudio = (priceStudio * countNights) * 0.95;
            } else {
                finalStudio = priceStudio * countNights;
            };
            if (countNights > 14) {
                finalApartment = (priceApartment * countNights) * 0.90;
            } else {
                finalApartment = priceApartment * countNights;
            }; break;
        case 'June':
        case 'September':
            priceStudio = 75.20;
            priceApartment = 68.70;

            if (countNights > 14) {
                finalStudio = (priceStudio * countNights) * 0.80;
            } else {
                finalStudio = priceStudio * countNights;
            };

            if (countNights > 14) {
                finalApartment = (priceApartment * countNights) * 0.90;
            } else {
                finalApartment = priceApartment * countNights;
            } break;
        case 'July':
        case 'August':
            priceApartment = 77;
            priceStudio = 76;
            finalStudio = countNights * priceStudio;
            if (countNights > 14) {
                finalApartment = (priceApartment * countNights) * 0.90;
            } else {
                finalApartment = priceApartment * countNights;
            }; break;
    }
    console.log(`Apartment: ${finalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStudio.toFixed(2)} lv.`);
}


//On Time for the Exam

function Exam(input) {
    let hourOfExam = +input[0];
    let minuteOfExam = +input[1];
    let hourOfArival = +input[2];
    let minuteOfArival = +input[3];
    let late = true;

    if (hourOfExam === 0 && minuteOfExam === 0 && hourOfArival === 0 && minuteOfArival === 0) {
        console.log(`On time`);
    } else {

        if (hourOfExam === 0) {
            minuteOfExam += 24 * 60
        }

        let examStartTimeInMinutes = minuteOfExam + hourOfExam * 60;
        let arrivalInMinutes = hourOfArival * 60 + minuteOfArival;

        if (examStartTimeInMinutes < arrivalInMinutes) {
            console.log('Late');
        } else if ((examStartTimeInMinutes === arrivalInMinutes || examStartTimeInMinutes - arrivalInMinutes) <= 30) {
            console.log('On time')
            late = false;
        } else if ((examStartTimeInMinutes - arrivalInMinutes) != 0) {
            console.log('Early')
            late = false;
        }

        let diff = Math.abs(examStartTimeInMinutes - arrivalInMinutes)

        if (late === false && diff <= 30 && diff != 0) {
            console.log(`${diff} minutes before the start`)
        }

        if (late === false && diff < 60 && diff > 30) {
            console.log(`${diff} minutes before the start`)
        } else if (late === false && diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`${hours}:${minutes} hours before the start`)
            }
        } else if (late === true && diff < 60 && diff != 0) {

            console.log(`${diff} minutes after the start`)

        } else if (late === true && diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`)
            }
        }
    }
}

//Ski Trip

function skiing(input) {
    let daysOfStaying = +input[0];
    let typeOfRoom = input[1];
    let review = input[2];
    let price;
    let totalPay;

    switch (typeOfRoom) {
        case 'room for one person':
            price = 18;
            totalPay = price * (daysOfStaying - 1);
            break;
        case 'apartment':
            price = 25;
            if (daysOfStaying < 10) {
                totalPay = (price * (daysOfStaying - 1)) * 0.70;
            } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
                totalPay = (price * (daysOfStaying - 1)) * 0.65;
            } else {
                totalPay = (price * (daysOfStaying - 1)) * 0.50;
            }
            break;
        case 'president apartment':
            price = 35;
            if (daysOfStaying < 10) {
                totalPay = (price * (daysOfStaying - 1)) * 0.90;
            } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
                totalPay = (price * (daysOfStaying - 1)) * 0.85;
            } else {
                totalPay = (price * (daysOfStaying - 1)) * 0.80;
            }
            break;
    }

    if (review === 'positive') {
        totalPay += (totalPay * 0.25)
    } else {
        totalPay = totalPay - (totalPay * 0.10)
    }
    console.log(totalPay.toFixed(2))
}
