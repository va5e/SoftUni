// Hello softUni

function hello() {
    console.log("Hello SoftUni")
}

// Nums 1 to 10

function nums1to10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

// Square area

function squareArea(input) {
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}

//Inches to cm

function inchesToCm(input) {

    let inch = input[0];
    let cm = inch * 2.54;
    console.log(cm);
}

//Greeting by name

function greetingByName(input) {
    let name = input[0];
    let greeting = "Hello, " + name;
    console.log(greeting);
}

//concatanate data

function concatenateData(input) {
    console.log(`You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`);
}

//Projects creation

function projectTime(input) {
    let arcName = input[0];
    let numOfProjects = Number(input[1]);
    let timeNeeded = numOfProjects * 3;

    console.log(`The architect ${arcName} will need ${timeNeeded} hours to complete ${numOfProjects} project/s.`);
}

//Pet shop

function petShop(input) {

    let dogFood = Number(input[0]) * 2.5;
    let catFood = Number(input[1]) * 4;
    console.log(`${dogFood + catFood} lv.`);
}

//Yard greening

function greening(input) {

    let price = Number(input[0]) * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}