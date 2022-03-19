function dearSanta(input) {
    let daysMissing = +input[0];
    let foodLeftInKg = +input[1];
    let foodPerDayDeerOne = +input[2];
    let foodPerDayDeerTwo = +input[3];
    let foodPerDayDeerThree = +input[4];

    let deer1FoodNeeded = daysMissing * foodPerDayDeerOne;
    let deer2FoodNeeded = daysMissing * foodPerDayDeerTwo;
    let deer3FoodNeeded = daysMissing * foodPerDayDeerThree;

    let sumFoodNeeded = deer1FoodNeeded + deer2FoodNeeded + deer3FoodNeeded;

    let diff = Math.abs(foodLeftInKg - sumFoodNeeded);

    if (sumFoodNeeded <= foodLeftInKg) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
dearSanta(['2', '10', '1', '1', '2'])