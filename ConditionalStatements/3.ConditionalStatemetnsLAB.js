//Excellent result

function nadyaObichaVasko(input) {
    let x = Number(input[0]);
    if (x >= 5.5)

        console.log('Excellent!');
}

//Greater number

function biggerNumber(input) {
    let a = input[0];
    let b = input[1];

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}


//Even or odd

function oddOrEven(input) {
    let a = Number(input[0]);

    if (a % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd')
    }
}

//Password Guess

function password(input) {
    let pass = input[0];

    if (pass === "s3cr3t!P@ssw0rd") {
        console.log('Welcome')
    } else {
        console.log('Wrong password!')
    }
}

//Number 100 to 200

function biggerThan100(input) {
    let num = +input[0];

    if (num < 100) {
        console.log('Less than 100')
    } else if (num <= 200) {
        console.log('Between 100 and 200')
    } else {
        console.log('Greater than 200')
    }
}

//Speed info

function speed(input) {
    let speed = +input[0];

    if (speed <= 10) {
        console.log('slow')
    } else if (speed <= 50) {
        console.log('average')
    } else if (speed <= 150) {
        console.log('fast');
    } else if (speed <= 1000) {
        console.log('ultra fast')
    } else { console.log('extremely fast') }
}

//Area of figures

function figuresArea(input) {
    let type = input[0];
    let face;

    if (type === 'square') {
        let x = input[1];
        face = x * x;
    } else if (type === 'rectangle') {
        let x = input[1];
        let y = input[2];
        face = x * y;
    } else if (type === 'circle') {
        let r = input[1];
        face = Math.PI * Math.pow(r, 2);
    } else if (type === 'triangle') {
        let x = input[1];
        let h = input[2];
        face = (x * h) / 2;
    }

    console.log(face);
}