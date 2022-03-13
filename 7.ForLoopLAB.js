//Numbers from 1 to 100

function oneTo100(input) {
    for (let i = 1; i < 101; i++) {
        console.log(i);
    }
}

//Numbers N...1

function oneTo100(input) {
    for (let i = +input; i > 0; i--) {
        console.log(i);
    }
}

//Numbers 1...N with step 3

function oneTo100(input) {
    for (let i = 1; i < (+input + 1); i = i + 3) {
        console.log(i);
    }

}

//Even powers of 2

function oneTo100(input) {
    for (let i = 0; i <= +input[0]; i++) {
        if (i % 2 === 0) {
            console.log(2 ** i);
        }
    }

}

//Character sequence

function string(input) {
    for (let i = 0; i < input[0].length; i++) {
        console.log(input[0][i])

    }
}


//Vowels sum

function vowels(input) {
    let result = 0;

    for (let i = 0; i < input[0].length; i++) {

        switch (input[0][i]) {
            case 'a': result += 1; break;
            case 'e': result += 2; break;
            case 'i': result += 3; break;
            case 'o': result += 4; break;
            case 'u': result += 5; break;
        }
    }
    console.log(result);
}

//Sum of Numbers

function sumOfNumbers(input) {
    let result = 0;

    for (let i = 0; i < input[0].length; i++) {
        result += Number(input[0][i]);
    }
    console.log(`The sum of the digits is:${result}`);
}

//Numbers devisible by 9

function sumOfNumbers(input) {
    let numOne = +input[0];
    let numTwo = +input[1];
    let sum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = numOne; i <= numTwo; i++) {
        if (i % 9 === 0) {
            sum += i;
            console.log(i);
        }
    }
}