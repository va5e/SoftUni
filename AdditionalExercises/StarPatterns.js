// Rectangle 10 X 10 Stars

function rectangle10X10() {
    let string = '**********'

    for (let i = 1; i <= 10; i++) {
        console.log(string);
    }
}

// Rectangle N x N stars

function rectangleNxN(input) {
    let count = +input[0]

    for (let i = 1; i <= count; i++) {
        let string = '';
        for (let j = 0; j < count; j++) {
            string += '*'
        }
        console.log(string);
    }
}

//Square of stars

function squareOfStars(input) {
    let count = +input[0]

    for (let i = 1; i <= count; i++) {
        let string = '';
        for (let j = 0; j < count; j++) {
            string += '* '
        }
        console.log(string);
    }
}

// Triangle of dollars

function triangleOfDollars(input) {
    let count = +input[0];
    let string = '';

    for (let i = 1; i <= count; i++) {
        string += '$ '
        console.log(string);
    }
}

//Square frame

function squareFrame(input) {
    let count = +input[0];
    let string = '';
    let openClose = '';

    for (let i = 1; i <= count; i++) {
        if (i === 1 || i === count) {
            openClose += '+ '
        } else {
            openClose += '- '
        }
    }

    for (let i = 1; i <= count; i++) {
        if (i === 1 || i === count) {
            console.log(openClose);
        } else {
            for (let j = 1; j <= count; j++) {
                if (j === 1 || j === count) {
                    string += '| '
                } else {
                    string += '- '
                }
            }
            console.log(string)
            string = '';
        }
    }
}

//Rombus of stars

function rombusOfStars(input) {
    let counter = +input[0];

    for (let i = 1; i <= counter; i++) {
        let interval = '';
        let star = '';

        for (let j = 1; j <= counter - i; j++) {
            interval += ' ';
        }

        for (let s = 1; s <= i - 1; s++) {
            star += '* '
        }
        console.log(interval + '*', star)
    }

    for (let i = 2; i <= counter; i++) {
        let interval = '';
        let star = '';

        for (let j = 1; j <= i - 1; j++) {
            interval += ' ';
        }

        for (let s = 1; s <= counter - i; s++) {
            star += '* '
        }
        console.log(interval + '*', star)
    }
}

//My attempt to make romboidHalfing the given rows.

function romboidHalfingTheRows(input) {
    // in case the pyramid is even numver rows, the diamond will be rows-1 rows, because, otherwise it can't get appropriate center point to turn into diamond.
    let rows = input[0];
    let stars = '';
    let spaces = '';
    let secondSpaces = '';
    let seconsStars = '';
    let oddCasesString = '';

    for (let i = 1; i <= rows; i++) { //Making the first half which is normal pyramid and it's rows are half of the all rolls
        if (i <= rows / 2) { //defining when the normal pyramid needs to stop printing
            if (i === 1) {
                stars += '*'
            } else {
                stars += '**'
            }

            for (let j = 1; j <= rows - i; j++) {
                spaces += ' '
            }
            console.log(spaces + stars)
            spaces = '';
        }
    }

    if (rows % 2 !== 0) {  //Condition to make the pyrmid correct if there are odd numbers of rows
        //if you don't do that step, and the rows are odd, the center two rows will be with equal stars
        // and it wont form diamond shape
        let counterSpaces = Math.trunc(rows * 0.5)
        let counterStars = rows;

        for (let m = 1; m <= counterSpaces; m++) {
            oddCasesString += ' ';
        }

        for (let l = 1; l <= counterStars; l++) {
            oddCasesString += '*'
        }
        console.log(oddCasesString)
    }

    for (let i = 1; i <= rows - 1; i++) { // making the upsidedown pyramid and its rows are the other half of the all rows
        if (i > rows / 2) {  //defining when to start printing it.
            for (let j = rows - i; j >= 1; j--) {
                if (j === 1) {
                    seconsStars += '*'
                } else {
                    seconsStars += '**'
                }
            }

            for (let n = rows - i; n <= rows - 1; n++) {
                secondSpaces += ' '
            }
            console.log(secondSpaces + seconsStars)
            seconsStars = '';
            secondSpaces = '';
        }
    }
}

romboidHalfingTheRows(['9'])
////////////// normal romboid which is created with double the rows given as imput with two separate pyramids connecting.

function romboid(input) {
    let rows = input[0];
    let stars = '';
    let spaces = '';
    let secondSpaces = '';
    let seconsStars = '';
    /////Printing the normal pyramid
    for (let i = 1; i <= rows; i++) {
        if (i === 1) {
            stars += '*'
        } else {
            stars += '**'
        }

        for (let j = 1; j <= rows - i; j++) {
            spaces += ' '
        }
        console.log(spaces + stars)
        spaces = '';
    }

    /// printing and adding the upsideDown pyramid

    for (let i = 1; i <= rows - 1; i++) {

        for (let j = rows - i; j >= 1; j--) {
            if (j === 1) {
                seconsStars += '*'
            } else {
                seconsStars += '**'
            }
        }

        for (let n = rows - i; n <= rows - 1; n++) {
            secondSpaces += ' '
        }
        console.log(secondSpaces + seconsStars)
        seconsStars = '';
        secondSpaces = '';
    }
}