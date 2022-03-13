//Trapezoid Area

function faceOfTheTrapec(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);
    let faceOfTheTrapec = ((b1 + b2) * h) / 2;

    console.log(faceOfTheTrapec.toFixed(2));
}


//Triangle area

function triangleArea(input) {
    let b1 = Number(input[0]);
    let h = Number(input[1]);
    let faceOfTriangle = b1 * h / 2;

    console.log(faceOfTriangle.toFixed(2));
}

//Celsius to farenheit

function celsiumToFarenheit(input) {
    let celsium = Number(input[0]);
    let celsiumToFarenheit = (celsium * 1.8) + 32;

    console.log(celsiumToFarenheit.toFixed(2));
}

//Vegetable Market

function zelenchukovaBorsa(input) {
    let cenaZelenchuk = Number(input[0]);
    let cenaPlod = Number(input[1]);
    let obshtoKilogramiZelen = Number(input[2]);
    let obshtoKilogramPlod = Number(input[3]);
    let totalInEuro = ((obshtoKilogramiZelen * cenaZelenchuk) + (obshtoKilogramPlod * cenaPlod)) / 1.94;

    console.log(totalInEuro.toFixed(2));
}

//Training Lab

function uchebnaZala(input) {
    let heightCm = Number(input[0]) * 100;
    let widthCm = (Number(input[1]) * 100) - 100;
    let desks = Math.floor(widthCm / 70);
    let rows = Math.floor(heightCm / 120);
    let workingSpaces = desks * rows - 3;

    console.log(workingSpaces);
}


//Fishland

function fishland(input) {
    let skumriqPriceKg = +input[0];
    let cacaPriceKg = +input[1];
    let kgPalamud = +input[2];
    let kgSafrid = +input[3];
    let kgMidi = +input[4];
    let pricePalamud = skumriqPriceKg + (skumriqPriceKg * 0.6);
    let priceSafrid = cacaPriceKg + (cacaPriceKg * 0.8);
    let priceMidi = 7.5;
    let smetka = (kgPalamud * pricePalamud) + (kgSafrid * priceSafrid) + (priceMidi * kgMidi);

    console.log(smetka.toFixed(2));
}


//House painting

function housePainting(input) {
    let visochinaKushta = +input[0];
    let duljinaStranichnaStena = +input[1];
    let visochinaTriugulnaStena = +input[2];
    let prednaStena = (visochinaKushta * visochinaKushta) - (1.2 * 2);
    let prednaIZadnaStena = (prednaStena) + visochinaKushta * visochinaKushta;
    let stranichniSteni = ((duljinaStranichnaStena * visochinaKushta) * 2) - ((1.5 * 1.5) * 2);
    let pokrivPravougulnici = (visochinaKushta * duljinaStranichnaStena).toFixed(2) * 2;
    let pokrivTriugulnik = ((visochinaKushta * visochinaTriugulnaStena).toFixed(2) / 2) * 2;
    let zelenaBoq = ((prednaIZadnaStena + stranichniSteni).toFixed(2) / 3.4);

    console.log(zelenaBoq.toFixed(2));

    let cherevnaBoq = (pokrivPravougulnici + pokrivTriugulnik) / 4.3;

    console.log(cherevnaBoq.toFixed(2));
}


//Circle area and parameter

function sCircle(input) {
    let r = +input[0];
    let s = Math.PI * r * r;
    let p = Math.PI * r * 2;

    console.log(s.toFixed(2));
    console.log(p.toFixed(2));
}

//Weather forecast

function prognoza(input) {
    if (input[0] === 'sunny') {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

//Weather forecast part 2 


function prognozaTwo(input) {
    if (+input[0] >= 26 && +input[0] <= 35) {
        console.log('Hot');
    } else if (+input[0] >= 20.1 && +input[0] <= 25.9) {
        console.log('Warm');
    } else if (+input[0] >= 15 && +input[0] <= 20) {
        console.log('Mild');
    } else if (+input[0] >= 12 && +input[0] <= 14.9) {
        console.log('Cool');
    } else if (+input[0] >= 5 && +input[0] <= 11.9) {
        console.log('Cold');
    } else {
        console.log('unknown')
    }
}