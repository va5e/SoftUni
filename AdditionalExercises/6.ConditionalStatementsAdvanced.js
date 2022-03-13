//Match tickets

function tickets(input) {
    let budget = +input[0];
    let type = input[1];
    let countGuys = +input[2];
    let price;
    let fuelMoney;

    if (type === 'VIP') {
        price = 499.99;
    } else {
        price = 249.99
    }

    if (countGuys >= 5 && countGuys <= 9) {
        fuelMoney = budget * 0.60
    } else if (countGuys >= 10 && countGuys <= 24) {
        fuelMoney = budget * 0.5;
    } else if (countGuys >= 25 && countGuys <= 49) {
        fuelMoney = budget * 0.4;
    } else if (countGuys < 5) {
        fuelMoney = budget * 0.75;
    } else {
        fuelMoney = budget * 0.25;
    }

    let priceForTicketsForAll = (countGuys * price).toFixed(2);

    if (priceForTicketsForAll <= (budget - fuelMoney)) {
        console.log(`Yes! You have ${(Math.abs((budget - fuelMoney) - priceForTicketsForAll)).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(Math.abs((budget - fuelMoney) - priceForTicketsForAll)).toFixed(2)} leva.`)
    }
}

//Bike race

function bikeRide(input) {
    let youngsters = +input[0];
    let oldsters = +input[1];
    let type = input[2];
    let youngstersTax;
    let oldstersTax;

    switch (type) {
        case 'trail': youngstersTax = 5.50 * youngsters; oldstersTax = 7 * oldsters; break;
        case 'cross-country': youngstersTax = 8 * youngsters; oldstersTax = 9.50 * oldsters;
            if ((youngsters + oldsters) >= 50) {
                youngstersTax *= 0.75;
                oldstersTax *= 0.75;
            }; break;
        case 'downhill': youngstersTax = 12.25 * youngsters; oldstersTax = 13.75 * oldsters; break;
        case 'road': youngstersTax = 20 * youngsters; oldstersTax = 21.50 * oldsters; break;
    }
    let total = (youngstersTax + oldstersTax) * 0.95;
    console.log(total.toFixed(2));
}

//Flowers

function flowers(input) {
    let numHrizan = +input[0];
    let numRoz = +input[1];
    let numTulips = +input[2];
    let season = input[3];
    let isHolyday = input[4];
    let priceHrizan;
    let priceRoz;
    let priceTulips;
    let totalPrice;

    if (season === 'Spring' || season === 'Summer') {
        priceHrizan = 2.00;
        priceRoz = 4.10;
        priceTulips = 2.50;
    } else {
        priceHrizan = 3.75;
        priceRoz = 4.50;
        priceTulips = 4.15;
    }

    totalPrice = (numHrizan * priceHrizan) + (numRoz * priceRoz) + (numTulips * priceTulips);

    if (isHolyday === 'Y') {
        totalPrice *= 1.15;
    }

    if (numTulips > 7 && season === "Spring") {
        totalPrice *= 0.95;
    }

    if (numRoz >= 10 && season === 'Winter') {
        totalPrice *= 0.9;
    }

    if ((numTulips + numRoz + numHrizan) > 20) {
        totalPrice *= 0.8;
    }
    console.log((totalPrice + 2).toFixed(2))
}

//Car to go

function rentACar(input) {
    let budget = +input[0];
    let season = input[1];
    let type;
    let model;
    let price;

    if (budget <= 100) {
        type = 'Economy class'
        if (season === 'Summer') {
            model = 'Cabrio';
            price = budget * 0.35;
        } else {
            model = 'Jeep';
            price = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        type = 'Compact class'
        if (season === 'Summer') {
            model = 'Cabrio';
            price = budget * 0.45;
        } else {
            model = 'Jeep';
            price = budget * 0.80;
        }
    } else {
        model = 'Jeep'
        type = 'Luxury class'
        price = budget * 0.9
    }
    console.log(type);
    console.log(`${model} - ${price.toFixed(2)}`)
}

//Vacation

function vacation(input) {
    let budget = +input[0];
    let season = input[1];
    let acomodation;
    let country;
    let price;

    if (budget <= 1000) {
        acomodation = 'Camp'
        if (season === 'Summer') {
            country = 'Alaska'
            price = budget * 0.65;
        } else if (season === 'Winter') {
            country = 'Morocco';
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        acomodation = 'Hut'
        if (season === 'Summer') {
            country = 'Alaska'
            price = budget * 0.80;
        } else if (season === 'Winter') {
            country = 'Morocco';
            price = budget * 0.60;
        }
    } else {
        acomodation = 'Hotel'
        if (season === 'Summer') {
            country = 'Alaska'
        } else {
            country = 'Morocco'
        }
        price = budget * 0.9
    }
    console.log(`${country} - ${acomodation} - ${price.toFixed(2)}`)
}

//Truck driver

function bashtami(input) {
    let season = input[0];
    let kmPerMonth = +input[1];
    let moneyPerKm;

    if (kmPerMonth <= 5000) {
        if (season === 'Spring' || season === 'Autumn') {
            moneyPerKm = 0.75;
        } else if (season === 'Summer') {
            moneyPerKm = 0.90;
        } else {
            moneyPerKm = 1.05;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        if (season === 'Spring' || season === 'Autumn') {
            moneyPerKm = 0.95;
        } else if (season === 'Summer') {
            moneyPerKm = 1.10;
        } else {
            moneyPerKm = 1.25;
        }
    } else {
        moneyPerKm = 1.45
    }
    let moneyEarned = ((kmPerMonth * 4) * moneyPerKm) * 0.9;
    console.log(moneyEarned.toFixed(2))
}

//School camp

function schoolCamp(input) {
    let season = input[0];
    let genders = input[1];
    let countStudents = +input[2];
    let countNights = +input[3];
    let price;
    let sport;

    switch (season) {
        case 'Winter':
            if (genders === 'boys' || genders === 'girls') {
                price = 9.60;
            } else {
                price = 10;
            };
            if (genders === 'boys') {
                sport = 'Judo'
            } else if (genders === 'girls') {
                sport = 'Gymnastics'
            } else {
                sport = 'Ski'
            }; break;
        case 'Spring':
            if (genders === 'boys' || genders === 'girls') {
                price = 7.20;
            } else {
                price = 9.50;
            };
            if (genders === 'boys') {
                sport = 'Tennis'
            } else if (genders === 'girls') {
                sport = 'Athletics'
            } else {
                sport = 'Cycling'
            }; break;
        case 'Summer':
            if (genders === 'boys' || genders === 'girls') {
                price = 15;
            } else {
                price = 20;
            };
            if (genders === 'boys') {
                sport = 'Football'
            } else if (genders === 'girls') {
                sport = 'Volleyball'
            } else {
                sport = 'Swimming'
            }; break;
    }
    let total = price * countNights * countStudents;

    if (countStudents >= 50) {
        total *= 0.5;
    } else if (countStudents >= 20 && countStudents < 50) {
        total *= 0.85;
    } else if (countStudents >= 10 && countStudents < 20) {
        total *= 0.95;
    }
    console.log(`${sport} ${total.toFixed(2)} lv.`)
}

//Point on rectangle border

function rectangleStuff(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let x2 = +input[2];
    let y2 = +input[3];
    let x = +input[4];
    let y = +input[5];

    if ((x >= x1 && x <= x2) && (y === y1 || y === y2)) {
        console.log('Border');
    } else if ((y >= y1 && y <= y2) && (x === x1 || x === x2)) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}

//Numbers from 1 to 10

function numFromOneTo10(input) {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

//Multiply by 2

function multiplication(input) {
    let index = 0;

    while (+input[index] >= 0) {
        console.log(`Result: ${(+input[index] * 2).toFixed(2)}`);
        index++;
    }
    console.log(`Negative number!`)
}
