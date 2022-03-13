//USD to BGN

function coverter(input) {
    leva = input[0] * 1.79549;
    console.log(leva);
}

//Radians to degrees

function angleToDegrees(angles) {
    let anglesToDegrees = parseFloat(angles[0]) * 180 / Math.PI;
    console.log(anglesToDegrees);
}


//Deposit calculator

function depositCalculator(input) {
    let depoziranaSuma = Number(input[0]);
    let srokNaDepozita = Number(input[1]);
    let lihvenProcent = Number(input[2]);
    let deposit = depoziranaSuma + srokNaDepozita * ((depoziranaSuma * (lihvenProcent / 100)) / 12);

    console.log(deposit);
}

//Vacation book list


function reading(input) {
    let broiStranici = input[0];
    let straniciPerHour = input[1];
    let dni = input[2];
    let hoursPerBook = broiStranici / straniciPerHour;
    let howMuchHourdPerDay = hoursPerBook / dni;

    console.log(howMuchHourdPerDay)

}

//Suplies for school

function suplies4School(input) {
    let broiHemikali = input[0];
    let broiMarkeri = input[1];
    let litriPreparat = input[2];
    let procentNamalenie = input[3];
    let cenaZaVsichko = (input[0] * 5.80) + (input[1] * 7.20) + (input[2] * 1.20);
    let prispadnatiPari = cenaZaVsichko * (input[3] / 100);
    let finalnaSuma = cenaZaVsichko - prispadnatiPari;

    console.log(finalnaSuma);
}

//Repaiting

function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasoveMaistori = Number(input[3]);
    let torbichki = 0.4;
    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = paint * 14.5;
    let razreditelPrice = razreditel * 5;
    let sumOfMaterials = (nylonPrice + paintPrice + razreditelPrice) + ((paint * 0.1) * 14.5) + (torbichki);
    let rabotniciPayment = (sumOfMaterials * 0.30) * chasoveMaistori;
    let total = sumOfMaterials + rabotniciPayment;

    console.log(total);
}

//Food delivery

function restaurant(input) {
    let chickOrder = Number(input[0]);
    let fishOrder = Number(input[1]);
    let vegOrder = Number(input[2]);
    let sum = (chickOrder * 10.35) + (fishOrder * 12.40) + (vegOrder * 8.15);
    let desert = sum * 0.2;
    let total = sum + desert + 2.5;

    console.log(total);
}

//Basketball equipment

function basketBall(input) {
    let yearlyTax = Number(input);
    let sneakers = yearlyTax - (yearlyTax * 0.4);
    let clothes = sneakers - (sneakers * 0.2);
    let ball = clothes / 4;
    let acessories = ball / 5
    let sumOfAll = yearlyTax + sneakers + clothes + ball + acessories;

    console.log(sumOfAll)
}

//Fish tank

function fishTank(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percentBlocked = Number(input[3]);
    let v = a * b * c;
    let blockedSpace = v * (percentBlocked / 100);
    let freeSpace = v - blockedSpace;
    let neededWater = freeSpace * 0.001;

    console.log(neededWater);
}