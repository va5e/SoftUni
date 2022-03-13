//Old books

function oldBiblioThek(input) {

    let searchedBook = input[0];
    let counter = 0;
    let index = 1;

    while (true) {
        if (searchedBook === input[index]) {
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        if (input[index] === 'No More Books') {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`)
            break;
        }
        counter++
        index++
    }
}

//Exam preparation

function marinTarikatchitu(input) {
    let expelledNum = +input[0];
    let index = 1;
    let sumGrades = 0;
    let fails = 0;
    let lastExam;
    let numOfexe = 0;

    while (input[index] != 'Enough') {

        if (index % 2 === 0) {
            index++
            continue;
        }
        if (input[index + 1] <= 4) {
            fails++
        }
        if (fails === expelledNum) {
            console.log(`You need a break, ${fails} poor grades.`);
            break;
        }
        lastExam = input[index];
        numOfexe++
        sumGrades += +input[index + 1];
        index++
    }

    if (expelledNum != fails) {
        console.log(`Average score: ${(sumGrades / (numOfexe)).toFixed(2)}`);
        console.log(`Number of problems: ${numOfexe}`);
        console.log(`Last problem: ${lastExam}`);
    }
}


//Vacation

function vacancy(input) {
    let neededMonet = +input[0];
    let balance = +input[1];
    let daysSpend = 0;
    let savings = 0;
    let index = 2;
    let day = 0;

    while (true) {
        if (balance < 0) {
            balance = 0;
        }
        if (daysSpend === 5) {
            console.log(`You can't save the money.`)
            console.log(`${day}`)
            break;
        }

        if (neededMonet <= balance) {
            console.log(`You saved the money for ${day} days.`)
            break;
        }

        if (index % 2 != 0) {
            index++;
            continue;
        }

        if (input[index] === 'spend') {
            balance = balance - (+input[index + 1])
            daysSpend++
            index++
            day++
        } else {
            balance = balance + (+input[index + 1])
            daysSpend = 0;
            index++
            day++
        }
    }
}


//Walking

function walking(input) {
    let steps = 0;
    let index = 0;

    while (true) {
        if (input[index] === 'Going home') {
            steps += +input[index + 1]
            if (steps >= 10000) {
                console.log(`Goal reached! Good job!`);
                console.log(`${Math.abs(10000 - steps)} steps over the goal!`);
            } else {
                console.log(`${Math.abs(10000 - steps)} more steps to reach goal.`)
            }
            break;
        }

        if (steps >= 10000) {
            console.log(`Goal reached! Good job!`)
            console.log(`${Math.abs(10000 - steps)} steps over the goal!`);
            break;
        }
        steps += +input[index];
        index++
    }
}

//Coins

function coins(input) {
    let TwoLev = 0;
    let lev = 0;
    let st50 = 0;
    let st20 = 0;
    let st10 = 0;
    let st5 = 0;
    let st2 = 0;
    let st1 = 0;
    let resto = (+input[0]) * 100;
    let test = 200;

    while (resto >= 200) {
        resto -= test;
        TwoLev++
    }
    test = 100;
    while (resto >= 100) {
        resto -= test;
        lev++
    }
    test = 50;
    while (resto >= 50) {
        resto -= test;
        st50++
    }
    test = 20;
    while (resto >= 20) {
        resto -= test;
        st20++
    }
    test = 10;
    while (resto >= 10) {
        resto -= test;
        st10++
    }
    test = 5;
    while (resto >= 5) {
        resto -= test;
        st5++
    }
    test = 2;
    while (resto >= 2) {
        resto -= test;
        st2++
    }
    test = 1;
    while (resto >= 1) {
        resto -= test;
        st1++
    }
    let sum = TwoLev + lev + st50 + st20 + st10 + st5 + st2 + st1;
    console.log(sum)
}


//Cake

function cake(input) {

    let cakeWidth = +input[0];
    let cakeHeight = +input[1];
    let cakeS = cakeWidth * cakeHeight;
    let index = 2;
    while (true) {
        if (cakeS < +input[index]) {
            console.log(`No more cake left! You need ${Math.abs(cakeS - +input[index])} pieces more.`)
            break;
        }

        if (input[index] === 'STOP') {
            console.log(`${cakeS} pieces are left.`)
            break;
        }

        cakeS -= +input[index];
        index++

    }
}

//Moving

function moving(input) {
    let width = +input[0];
    let length = +input[1];
    let height = +input[2];
    let freeSpace = width * height * length;
    let usedSpace = 0;
    let index = 3;
    while (true) {
        if (freeSpace < usedSpace) {
            console.log(`No more free space! You need ${Math.abs(freeSpace - usedSpace)} Cubic meters more.`)
            break;
        }
        if (input[index] === 'Done') {
            console.log(`${Math.abs(freeSpace - usedSpace)} Cubic meters left.`)
            break;
        }
        usedSpace += +input[index];
        index++

    }
}
