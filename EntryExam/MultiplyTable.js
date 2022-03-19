function multiplicationTable(input) {
    let num = input[0];
    num = num.split('');
    num = num.reverse();
    let num1 = +num[0];
    let num2 = +num[1];
    let num3 = +num[2];

    for (let i = 0; i < 1; i++) {

        for (let i = 1; i <= num1; i++) {
            for (let j = 1; j <= num2; j++) {
                for (let s = 1; s <= num3; s++) {
                    console.log(`${i} * ${j} * ${s} = ${i * j * s};`)
                }
            }
        }
    }
}
multiplicationTable(['324'])
