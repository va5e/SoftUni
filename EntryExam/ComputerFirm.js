function computerFirm(input) {
    let countPc = +input[0];
    let sumRating = 0;
    let salesSum = 0;

    for (let i = 1; i <= countPc; i++) {
        let testedNum = input[i];
        let rating = +testedNum[2];
        let sales = Number(testedNum[0] + testedNum[1])

        switch (rating) {
            case 2: salesSum += 0; break;
            case 3: salesSum += sales * 0.5; break;
            case 4: salesSum += sales * 0.7; break;
            case 5: salesSum += sales * 0.85; break;
            case 6: salesSum += sales; break;
        }
        sumRating += rating;
    }
    console.log(salesSum.toFixed(2));
    console.log((sumRating / countPc).toFixed(2))
}
