function catDiet(input) {
    let percentFat = +input[0] / 100;
    let percentProteins = +input[1] / 100;
    let percentCarbs = +input[2] / 100;
    let calories = +input[3];
    let percentWater = 1 - +input[4] / 100;

    let gramsFat = (calories * percentFat / 9);
    let gramsProtein = (calories * percentProteins / 4);
    let gramsCarbs = (calories * percentCarbs / 4);

    let foodWeight = gramsFat + gramsProtein + gramsCarbs

    let caloriesPerGram = calories / foodWeight;
    let caloriesPerGramWithoutWater = caloriesPerGram * percentWater;

    console.log(caloriesPerGramWithoutWater.toFixed(4))
}
catDiet(['60',
    '25',
    '15',
    '2500',
    '60']
)