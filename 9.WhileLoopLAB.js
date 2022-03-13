//Read text

function readText(input) {
    let index = 0;

    while (input[index] != 'Stop') {
        console.log(input[index]);
        index++
    }
}

//Password

function passWord(input) {
    let index = 0;
    let userName = input[index];
    index++
    let passWord = input[index];
    index++
    let test = '';

    while (passWord != test) {
        test = input[index]
        index++
    }
    console.log(`Welcome ${userName}!`)
}

//Sum Numbers

function sumNums(input) {
    let num = +input[0];
    let test = 0;
    let index = 1;

    while (num > test) {
        test += +input[index];
        index++;
    }
    console.log(test);
}

//Sequence 2k + 1;

function twoKPlusOne(input) {
    let num = +input[0];
    let tested = 1;

    while (tested <= num) {
        console.log(tested);
        tested = tested * 2 + 1;
    }
}

//Account balance

function balance(input) {
    let index = 0;
    let total = 0;
    while (true) {
        if (input[index] === 'NoMoreMoney') {
            console.log('Total: ' + total.toFixed(2))
            break;
        } else if (input[index] < 0) {
            console.log('Invalid operation!')
            console.log('Total: ' + total.toFixed(2))
            break;
        }
        console.log(`Increase: ${(+input[index]).toFixed(2)}`)
        total += +input[index]
        index++;
    }
}

//Max Number

function biggestNum(input) {
    let index = 0;
    let currentBiggest = +input[index];

    while (input[index] !== 'Stop') {
        if (currentBiggest < +input[index]) {
            currentBiggest = +input[index]
        }
        index++
    }
    console.log(currentBiggest);
}

//Min Number

function biggestNum(input) {
    let arr = [];
    let index = 0;

    while (input[index] !== 'Stop') {
        arr.push(+input[index])
        index++
    }
    console.log(Math.min(...arr))
}


//Graduation

function graduation(input) {
    let nameOfStudent = input[0];
    let sumGrades = 0;
    let grade = 0;
    let kusane = 0;
    let index = 1;

    while (true) {
        if (grade === 12) {
            break;
        }

        if (+input[index] < 4) {
            kusane++
        }
        if (kusane > 1) {
            console.log(`${nameOfStudent} has been excluded at ${grade} grade`)
            break;
        }
        sumGrades += +input[index]
        index++
        grade++
    }

    if (kusane < 2) {
        console.log(`${nameOfStudent} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
    }
}