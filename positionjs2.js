const apiKey = "c235aa87f6e011164a36ac9d"; // Replace with your ExchangeRate-API key

// Function to get the exchange rate for a given currency pair
async function getPipValue(pair) {
    let baseCurrency = pair.split("/")[1]; // Extract the base currency (e.g., USD in EUR/USD)
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`; // Get rates against USD

    try {
        let response = await fetch(url);
        let data = await response.json();
        let exchangeRate = data.conversion_rates[baseCurrency]; // Get exchange rate for base currency

        if (!exchangeRate) {
            throw new Error("Invalid currency pair selected.");
        }

        // Pip Value Formula: (0.0001 / Exchange Rate) * Lot Size
        return (0.0001 / exchangeRate) * 100000; // Pip value for 1 lot
    } catch (error) {
        console.error("Error fetching pip value:", error);
        return 10; // Default to $10 per pip if API fails
    }
}

// Function to calculate position size
async function calculateLotSize() {
    let balance = parseFloat(document.getElementById("balance").value);
    let riskPercent = parseFloat(document.getElementById("risk").value);
    let stopLoss = parseFloat(document.getElementById("stopLoss").value);
    let pair = document.getElementById("pair").value; // Example: "EUR/USD"

    if (isNaN(balance) || isNaN(riskPercent) || isNaN(stopLoss)) {
        alert("Please enter valid values.");
        return;
    }

    let pipValue = await getPipValue(pair); // Fetch real-time pip value
    
    let riskAmount = (balance * (riskPercent / 100)).toFixed(2);
    let lotSize = (riskAmount / (stopLoss * pipValue)).toFixed(2);

    document.getElementById("riskAmount").textContent = `$${riskAmount}`;
    document.getElementById("lotSize").textContent = lotSize;
}