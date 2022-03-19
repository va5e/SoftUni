function hairSaloon(input) {
    let goal = +input[0];
    let index = 1;
    let moneyEarned = 0;

    while (input[index] !== 'closed') {

        if (moneyEarned >= goal) {
            console.log(`You have reached your target for the day!`)
            console.log(`Earned money: ${moneyEarned}lv.`)
            break;
        }
        if (input[index] !== 'haircut' && input[index] !== 'color') {
            index++
            continue;
        }

        if (input[index] === 'haircut') {
            if (input[index + 1] === 'mens') {
                moneyEarned += 15;
            } else if (input[index + 1] === 'ladies') {
                moneyEarned += 20;
            } else if (input[index + 1] === 'kids') {
                moneyEarned += 10;
            }
        } else if (input[index] === 'color') {
            if (input[index + 1] === 'touch up') {
                moneyEarned += 20;
            } else if (input[index + 1] === 'full color') {
                moneyEarned += 30;
            }
        }
        index++;
    }
    let diff = Math.abs(moneyEarned - goal)

    if (moneyEarned < goal) {
        console.log(`Target not reached! You need ${diff}lv. more.`)
        console.log(`Earned money: ${moneyEarned}lv.`)
    }
}
hairSaloon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])

