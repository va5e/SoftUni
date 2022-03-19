function excursion(input) {
    let countPeople = +input[0];
    let season = input[1];
    let price;
    switch (season) {
        case 'spring': (countPeople <= 5) ? price = 50 : price = 48; break;
        case 'summer': (countPeople <= 5) ? price = 48.50 : price = 45; break;
        case 'autumn': (countPeople <= 5) ? price = 60 : price = 49.50; break;
        case 'winter': (countPeople <= 5) ? price = 86 : price = 85; break;
    }
    let total = (countPeople * price);
    if (season === 'summer') {
        total *= 0.85;
    } else if (season === 'winter') {
        total *= 1.08
    }
    console.log(`${total.toFixed(2)} leva.`)
}