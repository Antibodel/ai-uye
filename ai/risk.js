function calculateRisk(balance, riskPercent) {
    return balance * (riskPercent / 100);
}

function positionSize(balance, entry, stopLoss, riskPercent) {
    const risk = calculateRisk(balance, riskPercent);
    const lossPerUnit = Math.abs(entry - stopLoss);
    return risk / lossPerUnit;
}
