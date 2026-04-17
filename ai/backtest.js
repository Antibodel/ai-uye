function backtest(data) {
    let profit = 0;

    data.forEach((price, i) => {
        if (i === 0) return;
        if (price > data[i - 1]) profit += 1;
        else profit -= 1;
    });

    return profit;
}
