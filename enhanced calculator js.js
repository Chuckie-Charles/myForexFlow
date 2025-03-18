// Percentage Risk Calculator
function calculatePercentageRisk() {
  const capital = parseFloat(document.getElementById('capital').value);
  const openPrice = parseFloat(document.getElementById('openPrice').value);
  const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
  const lotSize = parseFloat(document.getElementById('lotSize').value);

  if (isNaN(capital) || isNaN(openPrice) || isNaN(stopLossPrice) || isNaN(lotSize)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate the risk per pip (assuming 1 lot = 100,000 units)
  const pipValue = (lotSize * 100000) * 0.0001; // 1 pip = 0.0001 for most forex pairs
  const pipsRisked = Math.abs(openPrice - stopLossPrice) / 0.0001;
  const riskAmount = pipsRisked * pipValue;

  // Calculate percentage risk
  const percentageRisk = (riskAmount / capital) * 100;

  document.getElementById('percentageRiskResult').innerText = `Percentage Risk: ${percentageRisk.toFixed(2)}%`;
}

// Risk Reward Ratio Calculator
function calculateRiskRewardRatio() {
  const openPrice = parseFloat(document.getElementById('openPriceRR').value);
  const stopLossPrice = parseFloat(document.getElementById('stopLossPriceRR').value);
  const takeProfitPrice = parseFloat(document.getElementById('takeProfitPriceRR').value);
  const riskAmount = parseFloat(document.getElementById('riskAmountRR').value);

  if (isNaN(openPrice) || isNaN(stopLossPrice) || isNaN(takeProfitPrice) || isNaN(riskAmount)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  const risk = Math.abs(openPrice - stopLossPrice);
  const reward = Math.abs(takeProfitPrice - openPrice);
  const riskRewardRatio = reward / risk;

  document.getElementById('riskRewardRatioResult').innerText = `Risk Reward Ratio: ${riskRewardRatio.toFixed(2)}`;
}

// Pips Calculator
function calculatePips() {
  const price1 = parseFloat(document.getElementById('price1').value);
  const price2 = parseFloat(document.getElementById('price2').value);

  if (isNaN(price1) || isNaN(price2)) {
    alert("Please enter valid numbers for both prices.");
    return;
  }

  const pips = Math.abs(price1 - price2) * 10000; // Assuming 4 decimal places for most forex pairs
  document.getElementById('pipsResult').innerText = `Pips: ${pips.toFixed(2)}`;
}