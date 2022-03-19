//Day of week

function dayOfTheWeek(input) {
    let print;

    switch (input[0]) {
        case '1': print = ('Monday'); break;
        case '2': print = ('Tuesday'); break;
        case '3': print = ('Wednesday'); break;
        case '4': print = ('Thursday'); break;
        case '5': print = ('Friday'); break;
        case '6': print = ('Saturday'); break;
        case '7': print = ('Sunday'); break;
        default: print = ('Error');
    }
    return print;
}

//Weekend or Working day

function workingDay(input) {
    let print;

    switch (input[0]) {
        case ('Monday'):
        case ('Tuesday'):
        case ('Wednesday'):
        case ('Thursday'):
        case ('Friday'): print = 'Working day'; break;
        case ('Saturday'):
        case ('Sunday'): print = 'Weekend'; break;
        default: print = 'Error';
    }
    return print;
}


//Animal type

function animalClass(input) {
    let animal = input[0];

    if (animal === 'dog') {
        console.log('mammal')
    } else if (animal === 'crocodile' || animal === 'tortoise' || animal === 'snake') {
        console.log('reptile')
    } else {
        console.log('unknown')
    }
}

//Personal titles

function Age(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'm' && age >= 16) {
        console.log('Mr.')
    } else if (gender === 'm' && age < 16) {
        console.log('Master');
    } else if (gender === 'f' && age >= 16) {
        console.log('Ms.')
    } else {
        console.log('Miss')
    }
}

//Small shop

function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let amount = +input[2];
    let answer = 0;

    if (city === 'Sofia') {
        switch (product) {
            case 'coffee': answer = amount * 0.50; break;
            case 'water': answer = amount * 0.80; break;
            case 'beer': answer = amount * 1.20; break;
            case 'sweets': answer = amount * 1.45; break;
            case 'peanuts': answer = amount * 1.60; break;
        }
    }

    if (city === 'Plovdiv') {
        switch (product) {
            case 'coffee': answer = amount * 0.40; break;
            case 'water': answer = amount * 0.70; break;
            case 'beer': answer = amount * 1.15; break;
            case 'sweets': answer = amount * 1.30; break;
            case 'peanuts': answer = amount * 1.50; break;
        }
    }

    if (city === 'Varna') {
        switch (product) {
            case 'coffee': answer = amount * 0.45; break;
            case 'water': answer = amount * 0.70; break;
            case 'beer': answer = amount * 1.10; break;
            case 'sweets': answer = amount * 1.35; break;
            case 'peanuts': answer = amount * 1.55; break;
        }
    }
    console.log(answer);
}

//Number in range

function num(input) {
    let num = +input[0];

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

//Working hours

function workingTime(input) {
    let hour = +input[0];
    let day = input[1];

    if (day !== 'Sunday' && hour >= 10 && hour <= 18) {
        console.log('open')
    } else {
        console.log('closed')
    }
}

//Cinema ticket

function cinema(input) {
    let day = input[0];

    switch (day) {
        case 'Monday':
        case 'Tuesday': console.log(12); break;
        case 'Wednesday':
        case 'Thursday': console.log(14); break;
        case 'Friday': console.log(12); break;
        case 'Saturday':
        case 'Sunday': console.log(16); break;
    }
}

//Fruit or Vegetable

function fruitShop(input) {
    let productName = input[0];
    let fruitArr = ['banana', 'kiwi', 'apple', 'cherry', 'lemon', 'grapes']
    let vegArr = ['tomato', 'cucumber', 'pepper', 'carrot'];
    let answer;

    for (let i = 0; i < fruitArr.length; i++) {
        if (productName === fruitArr[i]) {
            answer = ('fruit');
            break;
        } else if (productName === vegArr[i]) {
            answer = ('vegetable');
            break;
        } else {
            answer = 'unknown'
        }
    }
    console.log(answer);
}


//Ivalid number

function validNumber(input) {
    let num = +input[0];

    if ((num >= 100 && num <= 200) || num === 0) {

    } else {
        console.log('invalid')
    }
}

//    Fruit shop

function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let amount = +input[2];
    let answer;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Thursday' || day === 'Wednesday' || day === 'Friday') {
        switch (fruit) {
            case 'banana': answer = amount * 2.50; break;
            case 'apple': answer = amount * 1.20; break;
            case 'orange': answer = amount * 0.85; break;
            case 'grapefruit': answer = amount * 1.45; break;
            case 'kiwi': answer = amount * 2.70; break;
            case 'pineapple': answer = amount * 5.50; break;
            case 'grapes': answer = amount * 3.85; break;
            default: answer = 'error'; break;
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': answer = amount * 2.70; break;
            case 'apple': answer = amount * 1.25; break;
            case 'orange': answer = amount * 0.90; break;
            case 'grapefruit': answer = amount * 1.60; break;
            case 'kiwi': answer = amount * 3.00; break;
            case 'pineapple': answer = amount * 5.60; break;
            case 'grapes': answer = amount * 4.20; break;
            default: answer = 'error'; break;
        }
    } else {
        answer = 'error';
    }
    if (answer !== 'error') {
        console.log(answer.toFixed(2));
    } else {
        console.log(answer)
    }
}

//Trade comissions

function shopComissions(input) {
    let city = input[0];
    let sell = +input[1];
    let profit;

    if (sell >= 0 && sell <= 500) {
        switch (city) {
            case 'Sofia': profit = sell * 0.05; break;
            case 'Varna': profit = sell * 0.045; break;
            case 'Plovdiv': profit = sell * 0.055; break;
            default: profit = 'error'; break;
        }
    } else if (sell > 500 && sell <= 1000) {
        switch (city) {
            case 'Sofia': profit = sell * 0.07; break;
            case 'Varna': profit = sell * 0.075; break;
            case 'Plovdiv': profit = sell * 0.08; break;
            default: profit = 'error'; break;
        }
    } else if (sell > 1000 && sell <= 10000) {
        switch (city) {
            case 'Sofia': profit = sell * 0.08; break;
            case 'Varna': profit = sell * 0.10; break;
            case 'Plovdiv': profit = sell * 0.12; break;
            default: profit = 'error'; break;
        }
    } else if (sell > 10000) {
        switch (city) {
            case 'Sofia': profit = sell * 0.12; break;
            case 'Varna': profit = sell * 0.13; break;
            case 'Plovdiv': profit = sell * 0.145; break;
            default: profit = 'error'; break;
        }
    } else if (sell < 0) {
        profit = 'error';
    }
    if (profit !== 'error') {
        console.log(profit.toFixed(2))
    } else {
        console.log(profit);
    }


}